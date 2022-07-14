const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const productos = sequelize.define(
  "productos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    numero_de_lote: {
      type: DataTypes.BIGINT,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.BIGINT,
    },
    cantidad_disponible: {
      type: DataTypes.INTEGER,
    },
    fecha_de_ingreso: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = productos;
