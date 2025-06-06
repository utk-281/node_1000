const fs = require("fs");
const { connectDB } = require("./database");

let displayHomePage = (req, res) => {
  res.send("Landing page!!!");
};

let displayFormPage = (req, res) => {
  // res.send("form page!!!!");
  // fs.createReadStream("./form.html", "utf-8").pipe(res);
  let readData = fs.createReadStream("./form.html", "utf-8"); // source
  // destination => res ; source.pipe(destination)
  readData.pipe(res);
};

let displayAllUsers = async (req, res) => {
  let myCollection = await connectDB();
  let users = await myCollection.find().toArray(); //cursor or pointer
  res.send(users);
};

let handleFormSubmit = async (req, res) => {
  console.log(req.body);
  let myCollection = await connectDB();
  myCollection.insertOne(req.body);
  res.send(
    `user with ${req.body.userEmail} has registered successfully\n\n other details ==> ${req.body.userName} and ${req.body.userPassword} and data is save in database`
  );
};

module.exports = {
  displayHomePage,
  displayFormPage,
  displayAllUsers,
  handleFormSubmit,
};

// http://localhost:9000/api/endpoint
