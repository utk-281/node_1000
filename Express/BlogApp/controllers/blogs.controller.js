const BLOG_SCHEMA = require("../models/blogs.model");
// importing the collection from models folder to perform CRUD

exports.addBlog = async (req, res) => {
  let { title, description } = req.body;

  console.log(req.body);
  console.log(title, description);

  let newBlog = await BLOG_SCHEMA.create({ title, description });

  res.send("data submitted");
};

exports.fetchOneBlog = async (req, res) => {};

exports.fetchAllBlogs = async (req, res) => {};

exports.deleteBlog = async (req, res) => {};

exports.updateBlog = async (req, res) => {};
