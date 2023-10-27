const getAllAutores = (req, res) => {
  db.query("select *from autores")
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

  res.send("probando getAllAutores");
};

const createAutor = (req, res) => {
  res.send("crea el autor");
};

module.exports = { getAllAutores, createAutor };
