const express = require('express');
const { registerUser, loginUser, getProfile } = require('../controllers/userController');
const router = express.Router();

// Ruta para registrar un usuario
router.post('/register', registerUser);

// Ruta para iniciar sesión
router.post('/login', loginUser);

// Ruta para obtener el perfil del usuario
// En un futuro, aquí puedes añadir middleware para verificar tokens (autenticación)
router.get('/profile', getProfile);

module.exports = router;
