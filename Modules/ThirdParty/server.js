//! steps ==>
// create a package.json file.
// install a third party module.
// import the module

//! before installing any third party module ==> we must have "package.json" file in the root directory.

//? to create a package.json file ==> "npm init -y"

//! package.json file consists the meta data(name, author, version, keywords, etc..) of the project along with dependencies.

//! to install any third party module/package ==> type "npm i/install module-name"
// npm i module-name
// npm install module-name
// npm i moduleName1 moduleName2 ..... ==> to install multiple modules.

const mongodb = require("mongodb").MongoClient;
// console.log(mongodb);

let connectDB = async () => {
  let client = await mongodb.connect("mongodb://localhost:27017"); // this will create a connection with mongodb database.
  console.log("connection established");

  let database = client.db("nodeDB"); // creating a database with db()
  console.log("database created");

  let collection = await database.createCollection("myInfo"); // creating a collection with createCollection()
  console.log("collection created");

  // CRUD operations

  //! 1) create/insert ==>  insertOne({}), insertMany([{},{},....])
  //   collection.insertOne({ name: "sachin", age: 23 });
  //   collection.insertMany([
  //     { name: "san", age: 23 },
  //     { email: "email@com", address: "pune" },
  //     { phoneNumber: 1234567890, pinCode: 123456 },
  //   ]);
  //   console.log("documents created");

  //! 2) read/fetch ==> findOne({})/find({})
  //   let data = await collection.findOne();
  // fetch the document whose address is pune
  let data = await collection.findOne({ address: "pune" });
  console.log(data);
};

connectDB();
