const express = require("express");
const fs = require("node:fs");

const app = express();

//! connectDB()

//! middleware
app.use(express.urlencoded({ extended: true }));

//! ================== routing part
//! home page
app.get("/", (req, res) => {
  console.log(req);
  fs.createReadStream("./public/index.html").pipe(res);
});

//! form page
app.get("/form", (req, res) => {
  fs.createReadStream("./public/form.html").pipe(res);
});

//! contact page
app.get("/contact", (req, res) => {
  fs.createReadStream("./public/contact.html").pipe(res);
});

//! 404 page
app.get("*", (req, res) => {
  res.send(`<h1> page not found</h1>`);
});

app.post("/abc", (req, res) => {
  //? 1) use this endpoint in the form action
  //? 2) set form method to "post"
  //? 3) use name attribute in the input

  let payload = req.body;
  console.log(payload);
  res.send(payload);
});

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log(`server running at http://localhost:9000`);
});

//? nodemon server
