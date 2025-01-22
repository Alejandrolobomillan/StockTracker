const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Asegúrate de tener este modelo correctamente importado
const Stock = require('../models/Stock');

// Generar un token JWT
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Registro de usuario
exports.registerUser = async (req, res) => {
    const { username, email, password, balance } = req.body; // Incluye balance en el body si lo deseas recibir

    try {
        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Si el balance no es proporcionado, lo asignamos a un valor predeterminado (ej. 10000)
        const userBalance = balance || 10000;  // Si no se proporciona balance, se asigna 10000

        // Crear el nuevo usuario (ahora asignamos el balance explícitamente)
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            balance: userBalance,  // Asignamos el balance aquí
        });

        // Asegurarse de que el balance se incluya en la respuesta
        res.status(201).json({
            message: 'Usuario registrado con éxito',
            token: generateToken(newUser._id),
            user: newUser,  // Aquí devuelves el usuario completo, incluyendo balance
        });
    } catch (err) {
        res.status(400).json({ message: 'Error al registrar usuario', error: err.message });
    }
};


// Login de usuario
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        res.json({
            message: 'Inicio de sesión exitoso',
            token: generateToken(user._id),
        });
    } catch (err) {
        res.status(500).json({ message: 'Error al iniciar sesión', error: err.message });
    }
};

// Obtener perfil del usuario autenticado
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener perfil', error: err.message });
    }
};

// Comprar acciones
exports.buyStock = async (req, res) => {
    const { stockId, quantity } = req.body; // stockId: ID de la acción, quantity: cantidad de acciones a comprar
    const user = req.user; // Usuario autenticado

    try {
        // Buscar la acción en la base de datos
        const stock = await Stock.findById(stockId);
        if (!stock) {
            return res.status(404).json({ message: 'Acción no encontrada' });
        }

        // Obtener los datos necesarios de la acción
        const { tickerSymbol, companyName, currentPrice, availableShares } = stock;

        // Verificar si hay suficientes acciones disponibles para la compra
        if (availableShares < quantity) {
            return res.status(400).json({ message: 'No hay suficientes acciones disponibles para comprar' });
        }

        // Calcular el coste total de las acciones
        const totalCost = currentPrice * quantity;

        // Verificar que el usuario tiene suficiente saldo
        if (user.balance < totalCost) {
            return res.status(400).json({ message: 'Saldo insuficiente para comprar las acciones' });
        }

        // Restar el saldo del usuario
        user.balance -= totalCost;

        // Verificar si el usuario ya tiene estas acciones en su cartera
        const userStockIndex = user.stocks.findIndex(item => item.stockId.toString() === stockId);
        
        if (userStockIndex === -1) {
            // Si el usuario no tiene esta acción, la añade a su cartera con toda la información
            user.stocks.push({
                stockId: stockId,
                tickerSymbol: tickerSymbol,
                companyName: companyName,
                quantity: quantity,
            });
        } else {
            // Si ya tiene esta acción, aumentar la cantidad
            user.stocks[userStockIndex].quantity += quantity;
        }

        // Reducir las acciones disponibles en la base de datos de la acción
        stock.availableShares -= quantity;

        // Guardar los cambios del usuario y de la acción
        await user.save();
        await stock.save();

        // Devolver respuesta exitosa
        res.status(200).json({ message: 'Acciones compradas exitosamente', user });
    } catch (error) {
        res.status(500).json({ message: 'Error al comprar las acciones', error });
    }
};

// Vender acciones
exports.sellStock = async (req, res) => {
    const { stockId, quantity } = req.body; // stockId: ID de la acción, quantity: cantidad de acciones a vender
    const user = req.user; // Usuario autenticado

    try {
        // Buscar la acción en la base de datos
        const stock = await Stock.findById(stockId);
        if (!stock) {
            return res.status(404).json({ message: 'Acción no encontrada' });
        }

        // Verificar si el usuario tiene suficientes acciones para vender
        const userStock = user.stocks.find(item => item.stockId.toString() === stockId);
        if (!userStock || userStock.quantity < quantity) {
            return res.status(400).json({ message: 'No tienes suficientes acciones para vender' });
        }

        // Incrementar el saldo del usuario
        const totalRevenue = stock.currentPrice * quantity;
        user.balance += totalRevenue;

        // Restar las acciones vendidas de la cartera del usuario
        userStock.quantity -= quantity;

        // Si el usuario no tiene más acciones de esa acción, eliminarla de la cartera
        if (userStock.quantity === 0) {
            user.stocks = user.stocks.filter(item => item.stockId.toString() !== stockId);
        }

        // Guardar los cambios del usuario
        await user.save();

        // Devolver respuesta exitosa
        res.status(200).json({ message: 'Acciones vendidas exitosamente', user });
    } catch (error) {
        res.status(500).json({ message: 'Error al vender las acciones', error });
    }
};
