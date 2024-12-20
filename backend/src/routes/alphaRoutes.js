const express = require('express');
const { getStockData } = require('../controllers/alphaController');

const router = express.Router();

// Ruta para obtener datos de una acción por su símbolo
router.get('/:symbol', getStockData);

module.exports = router;
