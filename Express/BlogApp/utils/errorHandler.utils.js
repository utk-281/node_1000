class ErrorHandler extends Error {
  static message;
  static statusCode;
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = ErrorHandler;
