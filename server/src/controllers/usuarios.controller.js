const usuarios = require("../models/usuarios");

const login = async (req, res) => {
  try {
    const { usuario, contrasena } = req.body;
    const username = await usuarios.findOne({ where: { usuario } });
    if (username) {
      const password = await usuarios.findOne({ where: { contrasena } });
      if (password) {
        res.status(200).json({ message: "Credenciales correctas" });
      } else {
        res.status(400).json({ error: "Contraseña incorrecta" });
      }
    } else {
      res.status(400).json({ error: "Usuario no existe" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = login;
