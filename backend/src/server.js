const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const alphaRoutes = require('./routes/alphaRoutes'); 
const dotenv = require('dotenv');

// Configurar variables de entorno
dotenv.config();

// Crear la aplicación Express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware para habilitar CORS
const cors = require('cors');
app.use(cors());

// Conectar a la base de datos
connectDB();

// Rutas
app.use('/api/users', userRoutes); 
app.use('/api/alpha', alphaRoutes); 

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Bienvenido a StockTracker');
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
