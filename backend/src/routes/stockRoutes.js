const express = require('express');
const { getAllStocks, getStockById, createStock, updateStock, deleteStock } = require('../controllers/stockController');
const router = express.Router();

// Ruta para obtener todas las acciones
router.get('/', getAllStocks);

// Ruta para obtener una acción por ID
router.get('/:id', getStockById);

// Ruta para crear una nueva acción
router.post('/', createStock);

// Ruta para actualizar una acción existente
router.put('/:id', updateStock);

// Ruta para eliminar una acción por ID
router.delete('/:id', deleteStock);

module.exports = router;
