const USER_SCHEMA = require("../models/users.model");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../utils/generateToken");
const { uploadOnCloudinary } = require("../utils/cloudinary");
const { sendEmail } = require("../utils/nodemailer");
const crypto = require("crypto");

//! add/ register user : endpoint ==> /register
exports.registerUser = asyncHandler(async (req, res, next) => {
  // console.log(req);
  // console.log(req.file);
  // console.log(req.files);

  let result = await uploadOnCloudinary(req?.file?.path);
  // console.log(result);

  const { name, email, password, role } = req.body;

  let existingUser = await USER_SCHEMA.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ success: false, message: "user email already registered" });
  }

  let newUser = await USER_SCHEMA.create({
    name,
    email,
    password,
    role,
    profilePicture:
      result?.url || "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
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

//
// utkarshgupta.281@gmail.com

exports.generateResetPasswordUrl = asyncHandler(async (req, res) => {
  let { email } = req.body;
  let user = await USER_SCHEMA.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).json({ message: "no email id found...." });
  }
  const resetToken = user.generateResetPasswordToken();
  // console.log(resetToken + "controller");,
  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `http://localhost:9000/users/v1/reset-password/${resetToken}`;

  try {
    await sendEmail({ email, message: resetPasswordUrl });
    res.status(200).json({ success: true, message: "password recovery email sent....." });
  } catch (error) {
    console.log(error);
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpire = undefined;
    await user.save();
    res.status(500).json({ message: "error while sending email" });
  }
});

exports.resetPassword = async (req, res) => {
  // token-- > extract;
  // token --<> hash
  // Date.now $gt:tokenExpiryDate
  // if(not okay) reset TokenExpiredError

  //! extract reset token
  let { resetToken } = req.params;
  console.log(resetToken);

  let hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");

  //! link ==> a link will be provided to reset the password

  // let findUser = USER_SCHEMA.findOne({_id:}) todo findUSER using hashedToken
  let findUser = await USER_SCHEMA.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordTokenExpire: { $gt: Date.now() },
  });

  if (!findUser) {
    return res.status(400).json({ message: "reset-password token expired " });
  }

  let { newPassword, confirmPassword } = req.body;

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ message: "password not same" });
  }

  // update the password of the user
  findUser.password = newPassword;
  findUser.resetPasswordToken = undefined;
  findUser.resetPasswordTokenExpire = undefined;
  await findUser.save();

  res.status(200).json({ success: true, message: "password reset" });
};

// http://localhost:9000/users/v1/reset-password/98fa53d55539a63ee40f193ff48e825b4b374fca
