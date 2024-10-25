const express = require("express");
const fs = require("node:fs");
const mongodb = require("mongodb").MongoClient;

//! connectDB method
let connectDB = async () => {
  let client = await mongodb.connect("mongodb://localhost:27017"); //! establish a connection using connect()

  let database = client.db("formData"); //! create a database using db()

  let collection = await database.createCollection("usersInfo"); // create a collection using createCollection()

  return collection;
};

const app = express();

//! connectDB()

//! middleware
app.use(express.urlencoded({ extended: true })); // built-in middleware

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

// app.get();
// app.put()
// app.delete()

app.post("/abc", async (req, res) => {
  //? 1) use this endpoint in the form action
  //? 2) set form method to "post"
  //? 3) use name attribute in the input

  let payload = req.body;
  console.log(payload);

  let myCollection = await connectDB();

  await myCollection.insertOne(payload);

  res.send("data added successfully");
});

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log(`server running at http://localhost:9000`);
});

//? nodemon server
