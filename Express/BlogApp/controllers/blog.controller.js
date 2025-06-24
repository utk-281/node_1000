const blogCollection = require("../models/blog.model");
const asyncHandler = require("express-async-handler");

const addBlog = asyncHandler(async (req, res) => {
  let { title, content, createdBy } = req.body;

  let newBlog = await blogCollection.create({
    title,
    content,
    createdBy,
  });

  res.status(201).json({
    success: true,
    message: "blog created successfully",
    newBlog,
  });
});

const fetchAllBlogs = asyncHandler(async (req, res) => {});

const fetchOneBlog = asyncHandler(async (req, res) => {});

const updateBlog = asyncHandler(async (req, res) => {});

const deleteBlog = asyncHandler(async (req, res) => {});

module.exports = {
  addBlog,
  fetchAllBlogs,
  fetchOneBlog,
  updateBlog,
  deleteBlog,
};
