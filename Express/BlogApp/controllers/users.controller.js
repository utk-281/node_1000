const { JWT_SECRET } = require("../config");
const USER_SCHEMA = require("../models/users.model");
const { generateToken } = require("../utils/generateToken");

exports.addUser = async (req, res) => {
  try {
    let { username, email, password } = req.body;

    let existingUser = await USER_SCHEMA.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "user email already registered" });
    }

    let newUser = await USER_SCHEMA.create({ username, email, password });

    res.status(201).json({ success: true, message: "user data added", newUser });
  } catch (error) {
    console.log("error while creating a user");
    res.status(500).json({ success: true, message: error });
  }
};

exports.fetchAllUsers = async (req, res) => {
  try {
    let users = await USER_SCHEMA.find();

    if (users.length === 0) return res.status(200).json({ message: "no users present" });

    res
      .status(200)
      .json({ success: true, message: "users fetched successfully", count: users.length, users });
  } catch (error) {
    console.log("error while fetching all the users");
    res.status(500).json({ success: false, message: error });
  }
};

exports.fetchOneUser = async (req, res) => {
  try {
    let { id } = req.params;

    let findUser = await USER_SCHEMA.findById(id);

    if (!findUser) return res.status(200).json({ message: "no user found" });

    res.status(200).json({ success: true, message: "user fetched successfully", findUser });
  } catch (error) {
    console.log("error while fetching single user");
    res.status(500).json({ success: false, message: error });
  }
};

exports.updateUser = async (req, res) => {
  try {
    let { id } = req.params;

    let findUser = await USER_SCHEMA.findById(id);

    if (!findUser) return res.status(200).json({ message: "no user found" });

    //! 1)

    // await USER_SCHEMA.updateOne(
    //   { _id: id },
    //   { $set: { username: req.body.username, password: req.body.password, email: req.body.email } }
    // );

    //! 2)
    findUser.username = req.body.username || findUser.username;
    findUser.email = req.body.email || findUser.email;
    findUser.password = req.body.password || findUser.password;

    await findUser.save();

    res.status(200).json({ success: true, message: "user updated successfully" });
  } catch (error) {
    console.log("error while updating a user");
    res.status(500).json({ success: false, message: error });
  }
};

exports.deleteUser = async (req, res) => {
  console.log(req.myUser);
  try {
    let { id } = req.params;
    // let userID = req.myUser._id;
    // console.log(userID);

    let user = await USER_SCHEMA.findById(id);

    if (!user) return res.status(200).json({ message: "no user found" });

    let deletedUser = await USER_SCHEMA.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "user deleted", deletedUser });
  } catch (error) {
    console.log("error while deleting a user");
    res.status(500).json({ success: false, message: error });
  }
};

exports.login = async (req, res) => {
  let { email, password } = req.body;
  let findUser = await USER_SCHEMA.findOne({ email });

  if (!findUser) return res.status(401).json({ message: "please enter correct email" });

  let isMatched = await findUser.verifyPassword(password);
  // console.log(isMatched);

  if (!isMatched) return res.status(401).json({ message: "wrong password" });

  let token = generateToken(findUser._id);
  // console.log(token);

  res.cookie("myCookie", token, {
    maxAge: 1 * 60 * 60 * 1000, // 1hr in milliseconds
    httpOnly: true, // cookies cannot be accessed by browser
  });

  res.status(200).json({ success: true, message: "user logged in", token });
};

exports.logout = (req, res) => {
  res.clearCookie("myCookie", "", {
    maxAge: 0,
  });

  res.status(200).json({ success: true, message: "user logged out" });
};
