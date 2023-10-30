const selectAllPosts = () => {
  return db.query(
    "select * from posts JOIN autores ON posts.autores_id = autores.id"
  );
};

const selectPostById = (postId) => {
  return db.query("select * from posts where id = ?", [postId]);
};

const createOnePost = ({
  titulo,
  descripcion,
  fecha_de_creacion,
  categoria,
  autores_id,
}) => {
  return db.query(
    "insert into posts (titulo, descripcion, fecha_de_creacion, categoria, autores_id) values (?, ?, ?, ?, ?)",
    [titulo, descripcion, fecha_de_creacion, categoria, autores_id]
  );
};

module.exports = {
  selectAllPosts,
  createOnePost,
  selectPostById,
};
