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

const createPosts = (req, res) => {};

module.exports = { getAllPosts, getPostsIdAutor, createPosts };
