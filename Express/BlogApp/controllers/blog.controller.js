const blogCollection = require("../models/blog.model");
const asyncHandler = require("express-async-handler");

const addBlog = asyncHandler(async (req, res) => {
  // console.log(req.headers["user-agent"]);
  // console.log(req.connection.remoteAddress);
  //? this will be used to secure the cookie
  console.log(req.headers["sec-ch-ua-platform"]);
  let userId = req.user._id;
  let { title, content } = req.body;

  let newBlog = await blogCollection.create({
    title,
    content,
    createdBy: userId,
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
