const Stock = require('../models/Stock'); // Importa el modelo de acción

// Obtener todas las acciones
const getAllStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.status(200).json(stocks);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener las acciones', error: err });
  }
};

// Obtener una acción por ID
const getStockById = async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id);
    if (!stock) {
      return res.status(404).json({ message: 'Acción no encontrada' });
    }
    res.status(200).json(stock);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener la acción', error: err });
  }
};

// Crear una nueva acción
const createStock = async (req, res) => {
  try {
    const newStock = new Stock(req.body);
    const savedStock = await newStock.save();
    res.status(201).json(savedStock);
  } catch (err) {
    res.status(400).json({ message: 'Error al crear la acción', error: err });
  }
};

// Actualizar una acción existente
const updateStock = async (req, res) => {
  try {
    const updatedStock = await Stock.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedStock) {
      return res.status(404).json({ message: 'Acción no encontrada' });
    }
    res.status(200).json(updatedStock);
  } catch (err) {
    res.status(400).json({ message: 'Error al actualizar la acción', error: err });
  }
};

// Eliminar una acción por ID
const deleteStock = async (req, res) => {
  try {
    const deletedStock = await Stock.findByIdAndDelete(req.params.id);
    if (!deletedStock) {
      return res.status(404).json({ message: 'Acción no encontrada' });
    }
    res.status(200).json({ message: 'Acción eliminada exitosamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar la acción', error: err });
  }
};

module.exports = {
  getAllStocks,
  getStockById,
  createStock,
  updateStock,
  deleteStock,
};
