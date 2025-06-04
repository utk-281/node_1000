const express = require("express");
const fs = require("fs");
const mongodb = require("mongodb");

//! create a db connection method
let connectDB = async () => {
  //! create a connection
  let client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
  //! create a database
  let database = client.db("form-data");
  //! create a collection
  let collection = await database.createCollection("users"); //~ collection("name") ==> will not return a promise

  return collection;
};

const app = express();

//! middleware
app.use(express.urlencoded({ extended: true })); //TODO

//! home page
app.get("/", (req, res) => {
  res.send("Landing page!!!");
});

//! form page
app.get("/form", (req, res) => {
  // res.send("form page!!!!");
  // fs.createReadStream("./form.html", "utf-8").pipe(res);
  let readData = fs.createReadStream("./form.html", "utf-8"); // source
  // destination => res ; source.pipe(destination)
  readData.pipe(res);
});

//! handling form submission
app.post("/abc", async (req, res) => {
  //! use the endpoint in the form action
  //! set method attribute to post
  //! use name attribute to store the data

  //~ data is always stored in req.body
  console.log(req.body);

  //! 1st way
  let { userName, userEmail, userPassword } = req.body;

  //! 2nd way
  // let a = req.body.userName;
  // let b = req.body.userEmail;
  // let c = req.body.userPassword;

  let myCollection = await connectDB();
  console.log(myCollection);

  // myCollection.insertOne(req.body);
  myCollection.insertOne({ userName, userEmail, userPassword });

  res.send(`user with ${userEmail} has registered successfully\n
    other details ==> ${userName} and ${userPassword} and data is save in database`);
});

// {userName:"abc", userPassword:"123", userEmail:"abc@gmail.com"}

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running at port 9000, http://localhost:9000");
});

//! if you want to use ES format syntax, add one property in package.json file ==> "type":"module"

// node --watch filename ==> watch mode (built-in command) ==> this will only watch one file
//! nodemon ==> .js file save ==> server will restart
//? to install nodemon as development dependency ==> npm i nodemon -D
// nodemon filename

// npm i nodemon -global

function add() {
  // stattemets
  return 2 + 3;
}

function print() {
  let res = 5;
  console.log(res);
}

print();
