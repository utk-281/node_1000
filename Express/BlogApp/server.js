const express = require("express");
const error = require("./middlewares/errors.middleware");
require("dotenv").config();

const userRoutes = require("./routes/user.routes");

const { connectDB } = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use("/v1/users", userRoutes);

//! should be implemented at last
app.use(error);

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log("Express server listening on port 9000");
});
