const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const usuarios = sequelize.define(
  "usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    usuario: {
      type: DataTypes.STRING,
    },
    contrasena: {
      type: DataTypes.STRING,
    },
    rol: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = usuarios;
