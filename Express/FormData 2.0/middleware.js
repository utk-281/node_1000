const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("inside middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("inside middleware2");
  next();
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api", (req, res) => {
  res.send({
    name: "John",
  });
});

app.listen(9000, (err) => {
  if (err) throw err;
  console.log("Express server listening on port 9000");
});

//! middlewares ==> middlewares are functions in express, which have access to req and response objects and next() to maintain the flow of execution.

// next() have two functionalities ==>
// 1) it checks for next middleware and if present it executes the next middleware,
// 2) if no middlewares are present it resumes the normal flow of execution

//? types of middlewares ==>
//! 1) built-in middlewares
//! 2) user-defined middlewares
//! 3) third-party middlewares
//! 4) error middlewares
//! 5) router level middlewares

// http://localhost:9000/api
