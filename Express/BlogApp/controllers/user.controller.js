const userCollection = require("../models/user.model");
// const bcryptjs = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const generateJWTToken = require("../utils/jwt.utils");

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
  if (!user)
    return res.status(404).json({
      success: false,
      message: "email is not registered",
    });

  let isMatch = await user.comparePassword(password);
  if (!isMatch)
    return res.status(400).json({
      success: false,
      message: "invalid credentials",
    });

  let token = generateJWTToken(user._id);
  console.log(token);

  res.status(200).json({
    success: true,
    message: "user logged in successfully",
  });
});

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

/* // function(){
error --> store
error --> {message, statusCode}
~ {"msg", 200}
~ {"msg", 500}
~ {"Internal Server Error" ,500}

{"email is required", 400}
} */
