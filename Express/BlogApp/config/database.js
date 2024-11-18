const mongoose = require("mongoose");
const { MONGODB_URL } = require(".");

exports.connectDB = async () => {
  await mongoose.connect(MONGODB_URL);
  console.log("database connected");
};
