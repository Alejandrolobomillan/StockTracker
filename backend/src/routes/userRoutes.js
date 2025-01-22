const express = require('express');
const { registerUser, loginUser, getProfile, buyStock, sellStock } = require('../controllers/userController'); // Asegúrate de que buyStock y sellStock estén aquí
const { protect } = require('../middlewares/authmiddleware');
const router = express.Router();

// Ruta para registrar un usuario
router.post('/register', registerUser);

// Ruta para iniciar sesión
router.post('/login', loginUser);

// Ruta para obtener el perfil del usuario
router.get('/profile', protect, getProfile);

// Ruta para comprar acciones
router.post('/buyStock', protect, buyStock);  

// Ruta para vender acciones
router.post('/sellStock', protect, sellStock);  

module.exports = router;
