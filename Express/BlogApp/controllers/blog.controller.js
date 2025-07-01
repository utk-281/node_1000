const blogCollection = require("../models/blog.model");
const userCollection = require("../models/user.model");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler.utils");

const addBlog = asyncHandler(async (req, res) => {
  let userId = req.user._id;
  // console.log(req.user);
  let { title, content } = req.body;

  let newBlog = await blogCollection.create({
    title,
    content,
    createdBy: userId,
  });
  // $inc ==> { $inc: { key_name: = +/-value } }
  // await userCollection.updateOne({ _id: userId }, { $inc: { totalBlogs: 1 } });
  // await userCollection.findByIdAndUpdate(userId, { $inc: { totalBlogs: 1 } });
  // await userCollection.findByIdAndUpdate(userId, { $push: { blogs: newBlog._id } });

  await userCollection.findByIdAndUpdate(userId, {
    $inc: { totalBlogs: 1 },
    $push: { blogs: newBlog._id },
  });

  res.status(201).json({
    success: true,
    message: "blog created successfully",
    newBlog,
  });
});

const fetchAllBlogs = asyncHandler(async (req, res, next) => {
  let allBlogs = await blogCollection.find();
  console.log(allBlogs);
  if (allBlogs.length === 0) return next(new ErrorHandler("no blogs found", 404));
  // explicit next()
  res.status(200).json({
    success: true,
    totalBlogs: allBlogs.length,
    message: "all blogs fetched successfully",
    allBlogs,
  });
});

const fetchOneBlog = asyncHandler(async (req, res, next) => {
  // let blog = await blogCollection.findOne({ _id: req.params.id });
  let blog = await blogCollection.findById(req.params.id).populate("createdBy");
  if (!blog) return next(new ErrorHandler("blog not found", 404));
  // if (!blog) throw new ErrorHandler("blog not found", 404)

  res.status(200).json({
    success: true,
    message: "blog fetched successfully",
    blog,
  });
});

const updateBlog = asyncHandler(async (req, res, next) => {
  let currentUserId = req.user._id;
  let blogId = req.params.id; // (_id===blogId, createdBy===currentUserId)
  let { title, content } = req.body;

  let blog = await blogCollection.findOne({ _id: blogId, createdBy: currentUserId });
  // let blog = await blogCollection.findOne({
  //   $and: [{ _id: blogId }, { createdBy: currentUserId }],
  // });
  if (!blog) return next(new ErrorHandler("blog not found", 404));

  // await blogCollection.updateOne({ _id: blogId }, { $set: { title, content } });
  let updatedBlog = await blogCollection.findByIdAndUpdate(
    blogId,
    { title, content },
    {
      new: true, // return the updated document
      runValidators: true, // validates the updated document
    }
  );
  res.status(200).json({
    success: true,
    message: "blog updated successfully",
    updatedBlog,
  });
});

const deleteBlog = asyncHandler(async (req, res, next) => {
  let currentUserId = req.user._id;
  let blogId = req.params.id;
  // blogId = 686222d366a2a1504eca982d

  let blog = await blogCollection.findOne({ _id: blogId, createdBy: currentUserId });
  // blog._id = ObjectId("686222d366a2a1504eca982d")
  if (!blog) return next(new ErrorHandler("blog not found", 404));

  let deletedBlog = await blogCollection.findByIdAndDelete(blog._id);
  await userCollection.findByIdAndUpdate(currentUserId, {
    $pull: { blogs: blog._id },
    $inc: { totalBlogs: -1 },
  });

  res.status(200).json({
    success: true,
    message: "blog deleted successfully",
    deletedBlog,
  });
});

module.exports = {
  addBlog,
  fetchAllBlogs,
  fetchOneBlog,
  updateBlog,
  deleteBlog,
};
