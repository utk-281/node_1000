const ErrorHandler = require("../utils/errorHandler.utils");
const jwt = require("jsonwebtoken");
const userCollection = require("../models/user.model");

const authenticate = async (req, res, next) => {
  // console.log(req.cookies);
  let cookies = req.cookies.myCookie;
  if (!cookies) {
    throw new ErrorHandler("please login to access this resource", 401);
  }
  //! decrypt the cookie
  let decodedToken = jwt.verify(cookies, process.env.JWT_SECRET_KEY);
  // console.log(decodedToken);
  // { id: '685b885f97b0b2f1e04e8166', iat: 1750829179, exp: 1750915579 }
  let decodedTokenId = decodedToken.id;
  //! find the user
  let myUser = await userCollection.findById(decodedTokenId);
  // console.log(myUser);
  //! modifying req object
  req.user = myUser;
  next();
};
//! token-reusing

module.exports = {
  authenticate,
};

// parameters vs arguments ==> parameters are values which are passed during function definition
// arguments are values which are passed during function calling.
