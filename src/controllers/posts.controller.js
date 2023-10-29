const PostModel = require("../models/post.model");

const getAllPosts = async (req, res) => {
  try {
    const [result] = await PostModel.selectAllPosts();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getPostsIdAutor = async (req, res) => {
  try {
    const [result] = await PostModel.selectAllPostsIdAutor();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const createPosts = async (req, res) => {
  try {
    const [result] = await PostModel.createOnePost(req.body);
    const [post] = await PostModel.selectPostById(result.insertId);
    res.json(post[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = { getAllPosts, getPostsIdAutor, createPosts };
