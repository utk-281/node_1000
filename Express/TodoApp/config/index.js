require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  MONGODB_LOCAL: process.env.MONGODB_LOCAL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_TOKEN_EXPIRE: process.env.JWT_TOKEN_EXPIRE,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET_KEY: process.env.CLOUDINARY_API_SECRET_KEY,
};
