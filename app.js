// app.js (o el nombre de tu archivo principal)

const express = require('express');
const app = express();
const validateStatus = require('./auth/validateStatus');

// Otros middlewares y configuraciones de la aplicación

// Usar el middleware de validación antes de las rutas que deseas validar
app.use(validateStatus);

// Definir tus rutas aquí
app.get('/ruta', (req, res) => {
  // Lógica de la ruta
  res.status(403).json({ message: 'No tienes acceso a esta ruta.' });
});

// Manejo de rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada.' });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor.' });
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
