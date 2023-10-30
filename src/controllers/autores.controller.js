const AutorModel = require("../models/autor.model");

const getAllAutores = async (req, res) => {
  try {
    const [result] = await AutorModel.selectAllAutores();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getPostsAutores = async (req, res) => {
  try {
    const [result] = await AutorModel.selectPostsIdAutor();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const createAutor = async (req, res) => {
  try {
    const [result] = await AutorModel.createOneAutor(req.body);
    const [autor] = await AutorModel.selectAutorById(result.insertId);
    res.json(autor[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = { getAllAutores, createAutor, getPostsAutores };
