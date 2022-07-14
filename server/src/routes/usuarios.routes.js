const express = require("express");
const router = express.Router();
const login = require("../controllers/usuarios.controller");

// rutas con sus respectivas peticiones
router.post("/login", login);

module.exports = router;
