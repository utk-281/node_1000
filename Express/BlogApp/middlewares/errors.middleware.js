const error = (err, req, res, next) => {
  //~ missing required fields
  if (err.name === "ValidationError") {
    err.statusCode = 400;
  }
  //~ duplicate key
  if (err.code === 11000) {
    err.statusCode = 409;
  }
  //~ cast error
  if (err.name === "CastError") {
    err.statusCode = 400;
    err.message = "Invalid Id";
  }
  //? global error handler
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    errorObject: err,
    errLine: err.stack,
  });
};

module.exports = error;

//! first wrap all the async functions inside asyncHandler
//! handle that error using error middleware
//! import it in main file and use it at last
