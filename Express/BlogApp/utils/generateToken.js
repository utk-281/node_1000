const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

exports.generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "10d",
  });
};
