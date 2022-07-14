const usuarios = require("../models/usuarios");

const login = async (req, res) => {
  try {
    const { usuario, contrasena } = req.body;
    const user = await usuarios.findOne({ where: { usuario: usuario } });
    if (!user) {
      res.status(404).json({ message: "El usuario no existe" });
    } else {
      res.status(200).json({ message: "Conexción exitosa" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = login;
