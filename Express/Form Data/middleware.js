const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("this is middleware 1");
  req.myname = "abc";
  next();
});

//! if no middleware is present then it will continue the normal flow of execution
//! if other middleware are present then next() will call the next middleware

app.use((req, res, next) => {
  console.log("this is middleware 2");
  next();
});

app.get("/", (req, res) => {
  res.send("Landing page!!!");
});

app.get("/about", (req, res) => {
  res.send("about page");
  console.log(req.myname);
});

// app.get("*", (req, res) => {
//   res.send("page not found");
// });

app.listen(9001, (err) => {
  if (err) console.log(err);
  console.log("server running on port 9001");
});

//! middlewares ==> it is a function. which comes in between req and res and has access to both req and res objects and it also has a next() which calls the next middleware present if not it continues the normal flow of execution
