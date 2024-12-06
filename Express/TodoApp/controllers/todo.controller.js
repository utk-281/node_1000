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

exports.fetchAll = asyncHandler(async (req, res) => {
  let todo = await TODO_SCHEMA.find({ createdBy: req.myUser._id });

  if (todo.length === 0) return res.status(200).json({ message: "no todo present" });

  res.status(200).json({ success: true, message: "todo fetched", todo });
});

exports.fetchOne = asyncHandler(async (req, res) => {
  let { id } = req.params;

  let findTodo = await TODO_SCHEMA.findOne({ _id: id, createdBy: req.myUser._id });
  // id is extracted from params and also we are verifying wether the user that is requesting the todo is created by the user himself

  if (!findTodo) return res.status(200).json({ message: "no todo found" });

  res.status(200).json({ success: true, message: "todo fetched", findTodo });
});
