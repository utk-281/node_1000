const USER_SCHEMA = require("../models/users.model");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../utils/generateToken");

//! add/ register user : endpoint ==> /register
exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  let existingUser = await USER_SCHEMA.findOne({ email });
  if (existingUser) {
    return res.status(401).json({ message: "email already registered" });
  }

  let newUser = await USER_SCHEMA.create({ name, email, password, role });
  res.status(201).json({ success: true, message: "user registered", newUser });
});

//! fetchAll, fetchOne and delete

exports.fetchAll = asyncHandler(async (req, res) => {
  let users = await USER_SCHEMA.find(); // array

  if (users.length === 0) return res.status(200).json({ message: "no users found" });

  res.status(200).json({
    success: true,
    message: "all users fetched successfully",
    count: users.length,
    users,
  });
});

// exports.fetchOne = asyncHandler(async (req, res) => {
//   let user = await USER_SCHEMA.findOOne({ _id: req.params.id });
// });

exports.login = asyncHandler(async (req, res) => {
  let { email, password } = req.body;

  let user = await USER_SCHEMA.findOne({ email });
  if (!user) return res.status(401).json({ message: "user not found" });

  let isMatch = await user.verifyPassword(password);

  if (!isMatch) return res.status(401).json({ message: "invalid credentials" });

  let token = generateToken(user._id);

  res.cookie("myCookie", token, {
    maxAge: 10 * 60 * 60 * 1000,
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "user logged in",
    token: token,
  });
});
