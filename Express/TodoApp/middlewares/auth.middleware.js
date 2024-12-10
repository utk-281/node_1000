const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const USER_SCHEMA = require("../models/users.model");

exports.authenticate = async (req, res, next) => {
  //! extracting cookies from request
  let token = req?.cookies?.myCookie;

  //! checking if token is present or valid
  if (!token) {
    return res.status(401).json({ message: "please log in or invalid token" });
  }

  //! then decoding the token to get the user _id
  let decodedToken = jwt.verify(token, JWT_SECRET);
  // { id:user._id , iat:value, ia......}

  //! finding the user based on _id
  let myUser = await USER_SCHEMA.findOne({ _id: decodedToken.id });

  //! attaching a myUser property to req object and assigning a value
  req.myUser = myUser;
  next();
};

exports.authorize = async (req, res, next) => {
  console.log(req.myUser);

  if (req.myUser.role !== "admin")
    return res.status(401).json({ success: true, message: "not authorized" });

  next();
};
