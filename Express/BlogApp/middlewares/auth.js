const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const USER_SCHEMA = require("../models/users.model");

exports.authenticate = async (req, res, next) => {
  //   console.log(req);
  //   console.log(req.cookies.myCookie);

  let token = req?.cookies?.myCookie;

  if (!token) {
    res.status(400).json({ message: "please log in to access this resource" });
  }

  //   next();

  let decoded = jwt.verify(token, JWT_SECRET);
  // decoding the token extracted from req using verify()
  console.log(decoded);
  //   { id: '6746a8137e267468fe21eeb3', iat: 1732685176, exp: 1732771576 }

  let user = await USER_SCHEMA.findById(decoded.id);
  console.log(user);
  req.myUser = user; // adding a myUser property to req object and it's value is user data
  next();
};

// types of middlewares
//! 1) user-defined
//! 2) application
//! 3) third party
//! 4) error
//! 5) router
