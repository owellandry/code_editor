const express = require('express');
const { login } = require('./auth');
const { verifyToken } = require('./auth'); // Asegúrate de importar el middleware verifyToken correctamente.

const router = express.Router();

// Ruta de inicio de sesión (POST /login)
router.post('/login', login);

// Otras rutas protegidas pueden usar el middleware verifyToken para verificar el token en las solicitudes.
router.get('/ruta-protegida', verifyToken, (req, res) => {
  // Lógica para la ruta protegida
  res.status(200).json({ message: 'Ruta protegida. Usuario autenticado correctamente.' });
});

module.exports = router;
