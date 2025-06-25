const jwt = require("jsonwebtoken");

const generateJWTToken = (id) => {
  // console.log(id, name);
  return jwt.sign({ id, tokenVersion }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
};

// a --> a: _id --> token(server)1 day: cookie(1 hr)
// a --> a: _id --> tokekn

// syntax ==>
//~ to generate a token we use
//~ sign({payload1, payload2,...}, secret-key, {expiresIn:"in day"}) which takes 3 parameters
//? 1) payload --> pass this inside an object
//? 2) secret-key --> which is used during encryption and decryption
//? 3) options --> which contains the expiry time

module.exports = generateJWTToken;
