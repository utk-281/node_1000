// user and admin schema both are same -->

const USER_SCHEMA = require("../models/users.model");
const asyncHandler = require("express-async-handler");

exports.fetchAllUsers = asyncHandler(async (req, res) => {
  let findUsers = await USER_SCHEMA.find({ role: "user" });

  if (findUsers.length === 0) return res.status(200).json({ message: "no users found" });

  res.status(200).json({ success: true, message: "all users fetched", findUsers });
});

