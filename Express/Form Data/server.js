const express = require("express");
const fs = require("fs");

const app = express();

//!
app.use(express.urlencoded({ extended: true })); //TODO

//! home page
app.get("/", (req, res) => {
  res.send("home page!!!");
});

//! form page
app.get("/form", (req, res) => {
  // res.send("form page!!!!");
  fs.createReadStream("./form.html", "utf-8").pipe(res);
});

//! handling form submission
app.post("/abc", (req, res) => {
  //! use the endpoint in the form action
  //! set method attribute to post
  //! use name attribute to store the data
  console.log(req.body);
});

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running at port 9000");
});

//! if you want to use ES format syntax, add one property in package.json file ==> "type":"module"

// node --watch server ==> watch mode (built-in) ==> this will only watch one file
//! nodemon ==> .js file save ==> server will restart
// nodemon filename
