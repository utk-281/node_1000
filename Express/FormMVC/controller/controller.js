const fs = require("fs");
const { connectDB } = require("../database");

//! logic for home page
exports.homePage = (req, res) => {
  res.send("this is home page");
};

//! logic for form page
exports.formPage = (req, res) => {
  // res.send("form page");
  console.log(__dirname);
  fs.createReadStream(__dirname + "/index.html").pipe(res);
};

//! logic for submitting form
exports.handleSubmit = async (req, res) => {
  let myCollection = await connectDB();
  console.log(req.body);

  let response = await myCollection.insertOne(req.body);
  console.log(response);
  res.send("data inserted");
};

exports.getData = async (req, res) => {
  let myCollection = await connectDB();

  let result = await myCollection.find().toArray();

  console.log(result);

  res.send(result);
};
