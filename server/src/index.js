const express = require("express");
const sequelize = require("./database/database");
const cors = require("cors");
const productosRuta = require("./routes/productos.routes");
const loginRuta = require("./routes/usuarios.routes");
// Esto se descomenta para la creación de las tablas
// require("./models/productos");
// require("./models/usuarios");
// require("./models/historial");

// asignando express
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// rutas
app.use(productosRuta, loginRuta);

async function main() {
  try {
    // Metodo para sincronizar con la base
    await sequelize.sync({ force: false });
    app.listen(5000);
    console.log("Servidor corriendo en el puerto: ", 5000);
  } catch (error) {
    console.error("No se puede conectar a la base de datos:", error);
  }
}

// ejecución del metodo main
main();
