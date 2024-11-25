const express = require("express");
const { PORT } = require("./config/index");
const { connectDB } = require("./config/database");

const blogRouter = require("./routers/blogs.router");
const userRouter = require("./routers/users.router");

connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/blogs", blogRouter);
app.use("/users", userRouter);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Express server listening on port 9000");
});
