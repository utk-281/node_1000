const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/crud_api");
  console.log("DB connected");
};

module.exports = { connectDB };

//! crud_api ==> db name
