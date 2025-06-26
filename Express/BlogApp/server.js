const express = require("express");
const error = require("./middlewares/errors.middleware");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/user.routes");
const blogRoutes = require("./routes/blog.routes");

const { connectDB } = require("./config/db");

connectDB();

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Correct CORS setup for frontend integration
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true, // allow cookies to be sent
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/v1/users", userRoutes);
app.use("/v1/blogs", blogRoutes);

//! should be implemented at last
app.use(error);

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(`Express server listening on port ${process.env.PORT}`);
});
