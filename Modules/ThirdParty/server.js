//! steps ==>
// create a package.json file.
// install a third party module.
// import the module

const { ObjectId } = require("mongodb");

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

  // let collection = await database.createCollection("myInfo"); // creating a collection with createCollection()
  // console.log("collection created");

  //! ====================== checking if collection exists or not =======================
  let myCollection;

  let collections = await database.listCollections({ name: "myInfo" }).toArray();

  // console.log(collections);

  if (collections.length > 0) {
    myCollection = database.collection("myInfo");
  } else {
    myCollection = await database.createCollection("myInfo"); // creating a collection with createCollection()
    console.log("collection created");
  }

  // CRUD operations

  // ! 1) create/insert ==>  insertOne({}), insertMany([{},{},....])
  myCollection.insertOne({ name: "abc" });
  myCollection.insertMany([
    { name: "san", age: 23 },
    { email: "email@com", address: "pune" },
    { phoneNumber: 1234567890, pinCode: 123456 },
  ]);
  console.log("documents created");

  //! 2) read/fetch ==> findOne({})/find({})
  // let data = await collection.findOne(); // top most document
  // fetch the document whose address is pune
  // let data = await collection.findOne({ address: "pune" });
  // console.log(data);

  //! fetching multiple documents
  // let data = await collection.find({ name: "sachin" }).toArray(); //! while fetching multiple documents make sure to convert it into array.
  // console.log(data);

  //? fetching on the basis of _id
  // let data = await collection.findOne({ _id: new ObjectId("6711f43413e2a9b18fc2634c") });
  // console.log(data);

  //! 3) update ==> updateOne({filter}, {updation value}, {options})/ updateMany({filter},{updation value}, {options});

  // let updateData = await collection.updateMany(
  //   { name: "sachin" },
  //   { $set: { name: "abc", address: "mumbai", email: "asdf!@", phoneNumber: 1234567890 } }
  // );
  // console.log(updateData);

  //! 4) delete ==> deleteOne({filter})/ deleteMany({filter})
  // let data = await collection.deleteOne({}); // it will delete the top most document

  // let data = await collection.deleteMany({ name: "abc" });
  // console.log(data);
};

connectDB();
