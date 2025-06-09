const express = require("express");
const { connectDB } = require("./config/database");

//! db connection
connectDB();

const app = express();

app.listen(9000, (err) => {
  if (err) throw err;
  console.log("Express server listening on port 9000");
});
