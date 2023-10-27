const router = require("express").Router();

const AutoresController = require("../../controllers/autores.controller");

router.get("/", AutoresController.getAllAutores);

module.exports = router;
