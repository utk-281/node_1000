const express = require("express");
const app = express();

app.use((req, res, next) => {
  // user-defined middleware or custom middleware
  console.log("first middleware");
  console.log(req);
  req.myVar = "hello";
  next();
}); // middleware

app.use((req, res, next) => {
  console.log("second middleware");
  next();
}); // middleware2

app.get("/", (req, res) => {
  res.send(req.myVar);
});

app.get("/api", (req, res) => {
  res.send("api page");
});

app.listen(9000, (err) => {
  if (err) throw err;
  console.log("Express server listening on port 9000");
});

//! middlewares ==> it is a function. it has access to req obj and res obj, and a next() to maintain the flow of execution.

//! app.use() ==> use() method is used to add a  middleware.

//? types of middlewares
// 1) built-in middleware
// 2) custom middleware/ user-defined middleware
// 3) third party middleware
// 4) error middleware
