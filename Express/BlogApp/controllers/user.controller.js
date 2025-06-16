const userCollection = require("../models/user.model");

const registerUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    let newUser = await userCollection.create({
      name,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      message: "user registered successfully",
      data: newUser,
    });
  } catch (error) {
    res.send(error);
  }
};

const loginUser = async (req, res) => {};

const logoutUser = async (req, res) => {};

const updateUserDetails = async (req, res) => {};

const deleteUserProfile = async (req, res) => {};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  updateUserDetails,
  deleteUserProfile,
};
