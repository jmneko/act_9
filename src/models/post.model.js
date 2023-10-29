const selectAllPosts = () => {
  return db.query("select * from posts");
};

const selectAllPostsIdAutor = () => {
  return db.query("select * from posts where autores_id = 4");
};

module.exports = { selectAllPosts, selectAllPostsIdAutor };
