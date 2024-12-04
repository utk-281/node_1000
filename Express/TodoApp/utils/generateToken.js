const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_TOKEN_EXPIRE } = require("../config");

exports.generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_TOKEN_EXPIRE,
  });
};
