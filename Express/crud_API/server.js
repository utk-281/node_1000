const express = require("express");
const { connectDB } = require("./config/database");
require("dotenv").config();

const userRoutes = require("./routes/user.routes.js");

//! db connection
connectDB();

const app = express();

console.log(process.env);

//! middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", userRoutes);

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log("Express server listening on port 9000");
});

//! example

// API_KEY=124bhasdjk;
// API_SECRET_KEYa=134713
// username = 123
// password=123456
// PORT_NUMBER=9000
// MONGODB_URL=value
// these are the part of source code
