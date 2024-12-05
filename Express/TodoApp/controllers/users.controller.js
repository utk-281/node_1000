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

exports.logout = asyncHandler(async (req, res) => {
  res.clearCookie("myCookie", "", {
    maxAge: Date.now,
  });

  res.status(200).json({ success: true, message: "user logged out" });
});
