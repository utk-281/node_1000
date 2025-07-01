const userCollection = require("../models/user.model");
const blogCollection = require("../models/blog.model");
// const bcryptjs = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const generateJWTToken = require("../utils/jwt.utils");
const ErrorHandler = require("../utils/errorHandler.utils");

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

const loginUser = asyncHandler(async (req, res) => {
  //! user enters ==>  email,password
  //! check if the email is present in db or not
  //! match the password
  //! if password is matched ==> generate a token
  //! if both are correct then send a success res
  let { email, password } = req.body;
  let user = await userCollection.findOne({ email });
  // user = {_id:, password:}
  if (!user) throw new ErrorHandler("invalid credentials", 404); // implicitly next()

  let isMatch = await user.comparePassword(password);
  if (!isMatch) throw new ErrorHandler("invalid credentials", 404);

  let token = generateJWTToken(user._id);
  // console.log(token);
  res.cookie("myCookie", token, {
    maxAge: 1 * 60 * 60 * 1000, //! maxAge in milliseconds
    httpOnly: true, //! cookies will not be accessible from frontend or in browser
    // sameSite,
    // secure: true, //? these three will be used with frontend
    // path:
  });
  res.status(200).json({
    success: true,
    message: "user logged in successfully",
    token,
  });
});

const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("myCookie");
  res.status(200).json({
    success: true,
    message: "user logged out successfully",
  });
});

const updateUserDetails = asyncHandler(async (req, res, next) => {
  let currentUserId = req?.user?._id;
  let { name, email } = req.body;
  let updatedUser = await userCollection.findByIdAndUpdate(
    currentUserId,
    { name, email },
    { new: true, runValidators: true }
  );
  if (!updatedUser) return next(new ErrorHandler("user not found", 404));
  res.status(200).json({
    success: true,
    message: "user details updated successfully",
    updatedUser,
  });
});

const updateUserPassword = asyncHandler(async (req, res, next) => {
  let currentUserId = req.user._id;
  let user = await userCollection.findById(currentUserId);

  let { newPassword, confirmNewPassword, oldPassword } = req.body;

  let isMatch = await user.comparePassword(oldPassword);
  if (!isMatch) return next(new ErrorHandler("invalid credentials", 404));

  if (newPassword !== confirmNewPassword)
    return next(new ErrorHandler("passwords do not match", 404));

  user.password = confirmNewPassword; // assigned the new data to the document
  let result = user.save(); // saving the assigned data, this save() will call pre('save') hook.
  console.log(result);
  res.status(200).json({
    success: true,
    message: "user password updated successfully",
  });
});

const deleteUserProfile = asyncHandler(async (req, res, next) => {
  let currentUserId = req?.user?._id;
  let deletedUser = await userCollection.findByIdAndDelete(currentUserId);
  if (!deletedUser) return next(new ErrorHandler("user not found", 404));
  await blogCollection.deleteMany({ createdBy: currentUserId });
  res.status(200).json({
    success: true,
    message: "user profile deleted successfully",
  });
});

const getUserProfile = asyncHandler(async (req, res, next) => {
  let userId = req.params.id;
  let user = await userCollection.findById(userId).select("-password").populate("blogs");
  if (!user) return next(new ErrorHandler("user not found", 404));
  res.status(200).json({
    success: true,
    message: "user profile fetched successfully",
    user,
  });
});

//! for frontend
const isLoggedIn = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "user is logged in",
    data: req.user,
  });
});

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  updateUserDetails,
  deleteUserProfile,
  isLoggedIn,
  getUserProfile,
  updateUserPassword,
};

/* // function(){
error --> store
error --> {message, statusCode}
~ {"msg", 200}
~ {"msg", 500}
~ {"Internal Server Error" ,500}

{"email is required", 400}
} */

/*
  ~ res.cookie("cookie-name", value, {options})
  res = {
  ..
  ..
  ..
   cookies:{ myCookie:value  }
  }

req {
  ..
  ..
  ..
  user:{
      ..
      ..
      ..
      _id:
    }
}


  */
