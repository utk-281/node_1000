//! ==> create a html form and display the data on the UI and store the data in the database.

//! 1) create a package.json file in the root folder. using command "npm init -y " or "npm init"

//! 2) install required modules using command "npm i/install module-name1 module-name2 ..."

//! 3) import the installed modules

const express = require("express");
const fs = require("fs");
const { MongoClient } = require("mongodb");

//? connect DB
const connectDB = async () => {
  // creating a connection
  let client = await MongoClient.connect("mongodb://localhost:27017");

  // creating a database
  let database = client.db("formData2");

  // creating a collection
  let collection = await database.createCollection("usersInfo");

  collection.insertMany({});

  return collection;
};

const app = express();

//! middlewares
app.use(express.urlencoded({ extended: true }));

//! routing part

// 1) home
app.get("/", (req, res) => {
  res.send("this is home page");
});

// 2) sign up page
app.get("/sign-up", (req, res) => {
  //   res.send("this is sign up page");
  fs.createReadStream("./form.html").pipe(res);
});

// 3) contact page
app.get("/contact", (req, res) => {
  res.send("this is contact me page");
});

app.post("/api", async (req, res) => {
  //? use the same endpoint ==> /api in the form action
  //? set method to post
  //? use name attribute to store the data

  console.log(req.body);

  let myCollection = await connectDB();
  // myCollection.insertOne(req.body);
  // ({key:value})

  //! destructuring
  let { userName, userPassword, userEmail } = req.body;

  myCollection.insertOne({ userEmail, userPassword });

  res.send(`${userName}`);

  // res.send(
  //   `this is your name: ${req.body.userName}, this is your email: ${req.body.userEmail}, this is your password: ${req.body.userPassword}`
  // );

  res.redirect("/contact");

  /*  req{

        header: ,
        date: ,
        body: { user data },
        params:,
        query:,
        cookies:,
    
        ...

        ...
  } */
}); // endpoint ==> /abc

app.listen(9000, (err) => {
  if (err) console.log(err);

  console.log("server running..........");
});

// middlewares ==> functions
