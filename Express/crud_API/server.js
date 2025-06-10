const express = require("express");
const { connectDB } = require("./config/database");

const userRoutes = require("./routes/user.routes.js");

//! db connection
connectDB();

const app = express();

//! middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", userRoutes);

app.listen(9000, (err) => {
  if (err) throw err;
  console.log("Express server listening on port 9000");
});
