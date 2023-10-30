const router = require("express").Router();

const AutoresController = require("../../controllers/autores.controller");

router.get("/", AutoresController.getAllAutores);
router.get("/posts", AutoresController.getPostsAutores);

router.post("/", AutoresController.createAutor);

module.exports = router;
