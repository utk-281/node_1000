const ErrorHandler = require("../utils/errorHandler.utils");

const authenticate = (req, res, next) => {
  console.log(req.cookies);
  let cookies = req.cookies.myCookie;
  if (!cookies) {
    throw new ErrorHandler("please login to access this resource", 401);
  }
  // statements
  next();
};

module.exports = {
  authenticate,
};
