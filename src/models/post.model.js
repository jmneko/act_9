const selectAllPosts = () => {
  return db.query("select * from posts");
};

const selectAllPostsIdAutor = () => {
  return db.query("select * from posts where autores_id = 4");
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
  selectAllPostsIdAutor,
  createOnePost,
  selectPostById,
};
