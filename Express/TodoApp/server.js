const express = require("express");
const { PORT } = require("./config");
const { connectDB } = require("./config/database");
const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/users.routes");
const todoRoutes = require("./routes/todo.routes");
const adminRoutes = require("./routes/admin.routes");
const { authenticate } = require("./middlewares/auth.middleware");

connectDB();

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// routes middleware
app.use("/users/v1", userRoutes); // "/users/v1" ==> static path / api versioning
app.use("/todo/v1", authenticate, todoRoutes);
app.use("/admin/v1", adminRoutes);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("server running at port:", PORT);
});
