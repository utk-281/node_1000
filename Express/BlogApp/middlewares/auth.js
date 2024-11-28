let jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
let USER_SCHEMA = require("../models/users.model");

exports.verifyUser = async (req, res, next) => {
  //   console.log(req.cookies);
  /*
  "cookie" is the name of the cookie 
  {
  myCookie: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDZhODEzN2UyNjc0NjhmZTIxZWViMyIsImlhdCI6MTczMjc3MDgwOCwiZXhwIjoxNzMzNjM0ODA4fQ.2EUXG-a0ikcnA4Hd7ON9_iC1v-ygkqRjb0-3roAa60I'
} 
   */

  let token = req.cookies.myCookie;
  console.log(token);

  if (!token) return res.status(401).json({ message: "please log in to access this" });

  let decodeToken = jwt.verify(token, JWT_SECRET);
  //   console.log(decodeToken);
  /*  decodeToken
  { id: '6746a8137e267468fe21eeb3', iat: 1732772325, exp: 1733636325 } 
   */

  let user = await USER_SCHEMA.findOne({ _id: decodeToken.id });
  //   console.log(user);
  req.myUser = user;
  next();
};
