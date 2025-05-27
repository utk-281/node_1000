//! 1) before installing any third party modules, we have to make sure that a file name "package.json" is present in the project folder
//? to create a .json file type command ==> "npm init -y" in the terminal

//! 2) now install the required modules by typing command ==> "npm install/i module-name" in the terminal
//? example ==> npm i mongodb // npm install mongodb

//! 3) now import the installed modules

const mongodb = require("mongodb");
// console.log(mongodb);
//~ MongoClient ==> it helps us to establish the connection between node program and mongodb database
//~ connect("url") ==> it helps us to connect to the database

let connectDB = async () => {
  //! 1) establish a connection ==> using MongoClient.connect("url")
  let client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
  //   console.log(client);
  //! 2) create a database ==> client.db("database-name")
  let database = client.db("NodeDB");
  //   console.log(database);
  //! 3) create a collection ==> database.createCollection("collection-name")
  let collection = await database.createCollection("nodeCollection");
  //   console.log(collection.insertOne);

  //~ <==<==<==<==<==<==<==<==<==<== CRUD ==>==>==>==>==>==>==>==>==>==>==>==>==>
  //! =============== create/ inserting/ adding document(s) ==========================
  //? ===== adding single document
  //   let data = await collection.insertOne({ name: "abc", age: 34 });
  //   console.log(data);
  //   console.log("document inserted");
  //? ===== adding multiple documents
  //   let multipleData = await collection.insertMany([
  //     { name: "def", age: 45 },
  //     { name: "xyz", email: "xyz@gmail.com" },
  //   ]);
  //   console.log(multipleData);
  //   console.log("data added");

  //! =============== reading/ fetching/ getting document(s) ==========================
  //? ===== fetching a single document
  //   let data = await collection.findOne();
  //   console.log(data);
  // let data = await collection.findOne({ email: "xyz@gmail.com" });
  // console.log(data);
  //   let data = await collection.findOne({ _id: new mongodb.ObjectId("683550e17b225cc8f049083c") });
  //   console.log(data);
  //? ===== fetching multiple documents
  //   let data = collection.find();
  //   let arrayData = await data.toArray(); //& toArray() ==> it is used to convert the cursor into an array
  //   console.log(arrayData);

  //! =============== updating/ modifying document(s) ==========================
  //? ===== updating a single document
  //   let updatedData = await collection.updateOne(
  //     { name: "abc" }, // filter
  //     { $set: { email: "abc@gmail.com" } } // updation
  //   );
  //   console.log(updatedData);
  //   console.log("data updated");
  //? ===== updating multiple documents
  //   let updatedData = await collection.updateMany({}, { $set: { hrsWorked: 10 } });
  //   console.log(updatedData);
  //   let updatedData = await collection.updateOne({ name: "def" }, { $unset: { age: "" } });
  //   console.log(updatedData);
  //   let updatedData = await collection.updateOne({ name: "abc" }, { $rename: { name: "username" } });
  //   console.log(updatedData);

  //! =============== deleting/ removing document(s) ==========================
  //? ===== deleting a single document
  //? ===== deleting multiple documents
};

connectDB();
