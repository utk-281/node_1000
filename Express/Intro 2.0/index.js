//? http methods ==>
// 1) get ==> it fetches the resources from the server.
// 2) post ==> it sends the resources to the server.
// 3) put / patch  ==> it updates the resources
// 4) delete ==> ot delete the resources.

//! 1 ==> import the module
const express = require("express");
const fs = require("fs"); // commonJS format
// import express from "express"; // ES6 format

//! 2 ==> invoke the top level function
const app = express();

//! ===== routing ===========

// app.get("endpoint", (req, res)=>{body})
app.get("/", (req, res) => {
  //   res.send("home page"); // it displays the message on the UI and terminates the current req, res cycle.
  fs.createReadStream("./public/home.html").pipe(res);
});

app.get("/download", (req, res) => {
  res.send("download page");
});

app.get("*", (req, res) => {
  res.send("<h1> page not found</h1>");
});

//! ================================

//! 3 ==> assign a port number
app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("Server running at port 9000");
});
