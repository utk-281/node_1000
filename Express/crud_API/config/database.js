const mongoose = require("mongoose");
const { MONGODB_URL } = require(".");

const connectDB = async () => {
  await mongoose.connect(MONGODB_URL);
  console.log("DB connected");
};

module.exports = { connectDB };

//! crud_api ==> db name
