//! importing the module

// ? to install third party module ==> npm i/install module-name1 module-name2 ......

const express = require("express");
// console.log(express);

//! calling/invoking top level function
const app = express();

// console.log(app);

//!============ routing part

//! home page
app.get("/", (req, res) => {
  res.send("home page");
});

//! download page
app.get("/download", (req, res) => {
  res.send("download page");
});

//! about page
app.get("/about", (req, res) => {
  res.send("Hello World");
});

app.get("*", (req, res) => {
  res.send("page not found");
});

//! port assignment
app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("Server running......");
});
