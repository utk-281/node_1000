const error = (err, req, res, next) => {
  //? global error handler
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    errorObject: err,
  });
};

module.exports = error;

//! first wrap all the async functions inside asyncHandler
//! handle that error using error middleware
//! import it in main file and use it at last
