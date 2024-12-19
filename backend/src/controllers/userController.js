const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Registrar un usuario
const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Verificar si el email ya está registrado
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'El email ya está registrado' });
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({ message: 'Usuario registrado con éxito', user });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el usuario', error });
  }
};

// Iniciar sesión
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar al usuario por email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Comparar la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    res.status(200).json({ message: 'Inicio de sesión exitoso', user });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión', error });
  }
};

// Obtener perfil del usuario
const getProfile = async (req, res) => {
  // En un futuro, puedes usar `req.user` del middleware de autenticación
  res.status(200).json({ message: 'Ruta de perfil de usuario' });
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
};
