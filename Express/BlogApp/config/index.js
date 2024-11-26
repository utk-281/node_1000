require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  MONGODB: process.env.MONGODB,
  JWT_SECRET: process.env.JWT_SECRET,
};
