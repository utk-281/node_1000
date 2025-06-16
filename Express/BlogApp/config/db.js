const mongoose = require("mongoose");

const connectDB = async () => {
  let client = await mongoose.connect(process.env.MONGODB);
  console.log("Database connected to:", client.connection.host);
};

module.exports = {
  connectDB,
};
