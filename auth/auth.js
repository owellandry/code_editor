// auth.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { promisify } = require('util');
const pool = require('../server/db_config');

const jwtSecretKey = process.env.JWT_SECRET_KEY;

// Función para generar un token JWT
const generateToken = (payload) => {
  return jwt.sign(payload, jwtSecretKey, { expiresIn: '1h' });
};

// Middleware para verificar el token en las rutas protegidas
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado.' });
  }

  try {
    const decoded = await promisify(jwt.verify)(token, jwtSecretKey);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido.' });
  }
};

// Ruta de inicio de sesión (POST /login)
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const [user] = await pool.query('SELECT * FROM usuarios WHERE NombreUsuario = ?', [username]);

    if (!user || !(await bcrypt.compare(password, user.Contrasena))) {
      return res.status(401).json({ message: 'Credenciales inválidas.' });
    }

    const token = generateToken({ userId: user.ID });
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error al intentar iniciar sesión:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

module.exports = {
  generateToken,
  verifyToken,
  login,
};
