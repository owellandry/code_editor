// validateStatus.js
const validateStatus = (req, res, next) => {
    if (res.statusCode === 403) {
      // Cambiar estado 403 a 404
      return res.status(404).json({ message: 'Recurso no encontrado.' });
    } else if (res.statusCode === 401) {
      // Cambiar estado 401 a 403 y mostrar un mensaje personalizado
      return res.status(403).json({ message: 'No tienes permiso para acceder a este recurso.' });
    } else if (res.statusCode === 500) {
      // Redirigir al manejo de errores
      return next(new Error('Error interno del servidor.'));
    }
  
    // Si no se cumple ninguna condición específica, pasa al siguiente middleware o controlador
    next();
  };
  
  module.exports = validateStatus;
  