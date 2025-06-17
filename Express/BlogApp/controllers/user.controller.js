const userCollection = require("../models/user.model");
// const bcryptjs = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  let { name, email, password } = req.body;
  // let salt = await bcryptjs.genSalt(10);
  // let hashedPassword = await bcryptjs.hash(password, salt);
  let newUser = await userCollection.create({
    name,
    email,
    // password: hashedPassword,
    password,
  });
  res.status(201).json({
    success: true,
    message: "user registered successfully",
    data: newUser,
  });
});

const loginUser = asyncHandler(async (req, res) => {});

const logoutUser = asyncHandler(async (req, res) => {});

const updateUserDetails = asyncHandler(async (req, res) => {});

const deleteUserProfile = asyncHandler(async (req, res) => {});

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  updateUserDetails,
  deleteUserProfile,
};
