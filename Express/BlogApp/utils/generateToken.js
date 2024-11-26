const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = { generateToken };

//! to generate token we use sign(), the first parameter inside sign() is payload, second is SECRET_key and third is options in which we usually provide token expiry date.
