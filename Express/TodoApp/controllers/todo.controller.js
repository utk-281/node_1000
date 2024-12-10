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

exports.deleteTodo = asyncHandler(async (req, res) => {
  let { id } = req.params;

  let findTodo = await TODO_SCHEMA.findOne({ _id: id, createdBy: req.myUser._id });

  if (!findTodo) return res.status(400).json({ message: "no todo found" });

  let deletedTodo = await TODO_SCHEMA.deleteOne({ _id: findTodo._id });

  res.status(200).json({ success: true, message: "todo deleted", deletedTodo });
});

exports.updateTodo = asyncHandler(async (req, res) => {
  let { id } = req.params;

  let findTodo = await TODO_SCHEMA.findOne({ _id: id, createdBy: req.myUser._id });

  if (!findTodo) return res.status(404).json({ message: "no todo found" });

  //! 1st way ==>
  // await TODO_SCHEMA.updateOne(
  //   { _id: findTodo._id },
  //   {
  //     $set: {
  //       title: req.body.title,
  //       description: req.body.description,
  //       status: req.body.status,
  //     },
  //   }
  // );

  //! 2nd way
  findTodo.title = req.body.title || findTodo.title; //! if user is not updating any field then, the already present value will be assigned
  findTodo.description = req.body.description || findTodo.description;
  findTodo.status = req.body.status || findTodo.status;
  await findTodo.save(); // to save all the changes

  res.status(200).json({ success: true, message: "todo updated" });
});
