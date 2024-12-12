// user and admin schema both are same -->

const USER_SCHEMA = require("../models/users.model");
const TODO_SCHEMA = require("../models/todo.model");
const asyncHandler = require("express-async-handler");

exports.fetchAllUsers = asyncHandler(async (req, res) => {
  let findUsers = await USER_SCHEMA.find({ role: "user" });

  if (findUsers.length === 0) return res.status(200).json({ message: "no users found" });

  res.status(200).json({ success: true, message: "all users fetched", findUsers });
});

exports.fetchOneUser = asyncHandler(async (req, res) => {
  let { id } = req.params;

  let user = await USER_SCHEMA.findOne({ _id: id, role: "user" });

  if (!user) return res.status(404).json({ message: "no user found" });

  res.status(200).json({ success: true, message: "user details fetched", user });
});

exports.fetchAllTodo = asyncHandler(async (req, res) => {
  let allTodo = await TODO_SCHEMA.find();

  if (allTodo.length === 0) return res.status(404).json({ message: "no todo present" });

  res.status(200).json({ success: true, message: "all todo fetched", allTodo });
});

exports.fetchOneTodo = asyncHandler(async (req, res) => {
  let allTodo = await TODO_SCHEMA.findOne({ _id: req.params.id });

  if (!allTodo) return res.status(404).json({ message: "no todo present" });

  res.status(200).json({ success: true, message: "todo fetched", allTodo });
});
