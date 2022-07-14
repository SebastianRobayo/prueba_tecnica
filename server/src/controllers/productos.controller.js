const productos = require("../models/productos");

const getProductos = async (req, res) => {
  try {
    // throw new Error("query fail");
    const searchProductos = await productos.findAll();
    res.json({ searchProductos });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getProductosID = async (req, res) => {
  const { id } = req.params;
  try {
    const searchProducto = await productos.findOne({
      where: {
        id,
      },
    });
    res.json(searchProducto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createProducto = async (req, res) => {
  const {
    numero_de_lote,
    nombre,
    precio,
    cantidad_disponible,
    fecha_de_ingreso,
  } = req.body;

  try {
    const newProductos = await productos.create({
      numero_de_lote,
      nombre,
      precio,
      cantidad_disponible,
      fecha_de_ingreso,
    });
    res.json(newProductos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateProducto = async (req, res) => {
  const { id } = req.params;
  const {
    numero_de_lote,
    nombre,
    precio,
    cantidad_disponible,
    fecha_de_ingreso,
  } = req.body;

  try {
    await productos.update(
      {
        numero_de_lote,
        nombre,
        precio,
        cantidad_disponible,
        fecha_de_ingreso,
      },
      {
        where: {
          id,
        },
      }
    );
    res.json("Actualización exitosa");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteProducto = async (req, res) => {
  const { id } = req.params;
  try {
    await productos.destroy({
      where: {
        id,
      },
    });
    res.json("Eliminación exitosa");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProductos,
  getProductosID,
  createProducto,
  updateProducto,
  deleteProducto,
};
