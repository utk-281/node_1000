const express = require("express");
const { PORT } = require("./config");
const { connectDB } = require("./config/database");

connectDB();

const app = express();

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("server running at port:", PORT);
});
