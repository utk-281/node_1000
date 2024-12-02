const mongoose = require("mongoose");
const { MONGODB_LOCAL } = require(".");

exports.connectDB = async () => {
  await mongoose.connect(MONGODB_LOCAL);
  console.log(`MongoDB connected`);
};
