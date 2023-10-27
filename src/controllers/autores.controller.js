const getAllAutores = (req, res) => {
  res.send("probando getAllAutores");
};

const createAutor = (req, res) => {
  res.send("crea el autor");
};

module.exports = { getAllAutores, createAutor };
