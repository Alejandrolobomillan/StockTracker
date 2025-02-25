const mongoose = require('mongoose');

// Esquema de Acción
const stockSchema = new mongoose.Schema({
  tickerSymbol: {
    type: String,
    required: [true, 'El símbolo de la acción es obligatorio'], // e.g., "AAPL"
    unique: true,
    trim: true,
    uppercase: true,
  },
  companyName: {
    type: String,
    required: [true, 'El nombre de la empresa es obligatorio'], // e.g., "Apple Inc."
    trim: true,
  },
  sector: {
    type: String,
    required: [true, 'El sector es obligatorio'], // e.g., "Tecnología"
  },
  currentPrice: {
    type: Number,
    required: [true, 'El precio actual es obligatorio'],
    min: [0, 'El precio debe ser mayor o igual a 0'],
  },
  volume: {
    type: Number,
    default: 0, // Volumen de negociación (puede ser 0 si no hay datos)
  },
  marketCap: {
    type: Number,
    default: 0, // Capitalización bursátil
  },
  availableShares: {
    type: Number,
    default: 10000, // Cuántas acciones están disponibles para comprar
    min: [0, 'La cantidad de acciones disponibles no puede ser negativa'],
  },
});

module.exports = mongoose.model('Stock', stockSchema);
