const express = require("express");
const router = express.Router();
const {
  getProductos,
  getProductosID,
  createProducto,
  updateProducto,
  deleteProducto,
} = require("../controllers/productos.controller");

router.get("/productos/search", getProductos);
router.get("/productos/search/:id", getProductosID);
router.post("/productos/create", createProducto);
router.put("/productos/update/:id", updateProducto);
router.delete("/productos/delete/:id", deleteProducto);

module.exports = router;
