const mongoose = require("mongoose");
const { MONGODB } = require(".");
exports.connectDB = async () => {
  await mongoose.connect(MONGODB);
  console.log(`MongoDB connected`);
};
