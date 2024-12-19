const mongoose = require('mongoose');

// Función para conectar a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/stocktracker');
    console.log('Conectado a MongoDB');
  } catch (err) {
    console.error('Error de conexión a MongoDB:', err);
    process.exit(1); // Termina el proceso si la conexión falla
  }
};

module.exports = connectDB;