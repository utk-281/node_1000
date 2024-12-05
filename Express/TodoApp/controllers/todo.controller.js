const TODO_SCHEMA = require("../models/todo.model");
const asyncHandler = require("express-async-handler");

exports.addTodo = asyncHandler(async (req, res) => {
  let { title, description, status } = req.body;

  console.log(req.myUser);

  let createdBy = req?.myUser?._id; // myUser details is coming from middleware

  let newTodo = await TODO_SCHEMA.create({
    title,
    description,
    status,
    createdBy,
  });

  res.status(201).json({ success: true, message: "todo added successfully", newTodo });
});

exports.fetchAllTodo = asyncHandler(async (req, res) => {
  let allTodo = await TODO_SCHEMA.find({ createdBy: req.myUser._id });

  res.status(200).json({ success: true, count: allTodo.length, message: "todo fetched", allTodo });
});
