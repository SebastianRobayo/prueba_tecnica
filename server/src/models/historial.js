const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

// modelo de la tabla de historial
const historial = sequelize.define(
  "historial",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    producto: {
      type: DataTypes.STRING,
    },
    cantidad: {
      type: DataTypes.INTEGER,
    },
    precio: {
      type: DataTypes.BIGINT,
    },
    fecha_de_compra: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = historial;
