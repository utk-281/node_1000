//! 1)
//? importing the express module
const express = require("express");

//! 2)
//? calling/invoking top level function
let app = express();

//! 4) routing ==> routing is defined as handling user's multiple endpoint requests.
//& syntax ==> get("/endpoint", cb)

//? display home page
app.get("/", (req, res) => {
  res.send("hello from express!!!!");
});

//? display about page
app.get("/about", (req, res) => {
  //   res.write("hello from about page");
  //   res.end();
  res.send("hello from about page!!!!");
});

//? display download page
app.get("/download", (req, res) => {
  res.send("<h1>hello from download page!!!!</h1>");
});

//! 3)
//? assigning a port number
app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("express server started at 9000");
});

//! using these app variable ==>
//~ assign a port number
//~ handle routing
//~ use middleware
//~ handle req and res object
