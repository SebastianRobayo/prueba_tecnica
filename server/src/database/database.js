const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("inventario", "baq", "Asiste.2021", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
