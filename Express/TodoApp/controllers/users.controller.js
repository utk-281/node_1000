const USER_SCHEMA = require("../models/users.model");

//! add/ register user : endpoint ==> /register
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    let existingUser = await USER_SCHEMA.findOne({ email });
    if (existingUser) {
      return res.status(401).json({ message: "email already registered" });
    }
  } catch (error) {
    console.log("err while registering a user");
    res.status(500).json({ success: false, message: error });
  }
};
