const express = require("express");
const router = express.Router();
const login = require("../controllers/usuarios.controller");

router.get("/login", login);

module.exports = router;
