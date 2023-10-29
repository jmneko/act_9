const AutorModel = require("../models/autor.model");

const getAllAutores = async (req, res) => {
  try {
    const [result] = await AutorModel.selectAllAutores();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const createAutor = (req, res) => {
  res.send("crea el autor");
};

module.exports = { getAllAutores, createAutor };
