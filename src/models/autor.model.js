const selectAllAutores = () => {
  return db.query("select * from autores");
};

const selectPostsIdAutor = () => {
  return db.query(
    "SELECT posts.*, autores.* FROM posts JOIN autores ON posts.autores_id = autores.id WHERE autores.id = 12"
  );
};

const selectAutorById = (autorId) => {
  return db.query("select * from autores where id = ?", [autorId]);
};

const createOneAutor = ({ nombre, email, imagen }) => {
  return db.query(
    "insert into autores (nombre, email, imagen) values (?, ?, ?)",
    [nombre, email, imagen]
  );
};

module.exports = {
  selectAllAutores,
  createOneAutor,
  selectAutorById,
  selectPostsIdAutor,
};
