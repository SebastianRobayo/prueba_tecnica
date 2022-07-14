const express = require("express");
const sequelize = require("./database/database");
const cors = require("cors");
const productosRuta = require("./routes/productos.routes");
const loginRuta = require("./routes/usuarios.routes");
// require("./models/productos");
// require("./models/usuarios");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

app.use(productosRuta, loginRuta);

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(5000);
    console.log("Servidor corriendo en el puerto: ", 5000);
  } catch (error) {
    console.error("No se puede conectar a la base de datos:", error);
  }
}

main();
