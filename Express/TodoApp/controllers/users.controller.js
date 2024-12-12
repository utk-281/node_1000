const USER_SCHEMA = require("../models/users.model");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../utils/generateToken");
const { uploadOnCloudinary } = require("../utils/cloudinary");

//! add/ register user : endpoint ==> /register
exports.registerUser = asyncHandler(async (req, res) => {
  // console.log(req);
  // console.log(req.file);
  // console.log(req.files);

  let result = await uploadOnCloudinary(req?.file?.path);
  // console.log(result);

  const { name, email, password, role } = req.body;

  let existingUser = await USER_SCHEMA.findOne({ email });
  if (existingUser) {
    return res.status(401).json({ message: "email already registered" });
  }

  let newUser = await USER_SCHEMA.create({
    name,
    email,
    password,
    role,
    profilePicture:
      result.url || "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
  });
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

exports.updatePassword = asyncHandler(async (req, res) => {
  // console.log(req.body);
  let { oldPassword, newPassword, confirmPassword } = req.body;

  if (oldPassword === newPassword)
    return res.status(400).json({ message: "new and old password are same" });

  let user = await USER_SCHEMA.findOne({ _id: req.myUser._id });

  let isMatch = await user.verifyPassword(oldPassword);
  // console.log("🚀 ~ exports.updatePassword=asyncHandler ~ isMatch:", isMatch);
  if (!isMatch) return res.status(400).json({ message: "please enter correct old password" });

  if (newPassword != confirmPassword)
    return res.status(400).json({ message: "new and confirm password are not same" });

  user.password = newPassword; //12356689
  await user.save({ validateBeforeSave: true });

  res.status(200).json({ success: true, message: "password updated" });
});
