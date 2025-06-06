const mongodb = require("mongodb");

//! create a db connection method
let connectDB = async () => {
  //! create a connection
  let client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
  //! create a database
  let database = client.db("form-data");
  //! create a collection
  let collection = await database.createCollection("users"); //~ collection("name") ==> will not return a promise
  //! return collection
  return collection;
};

module.exports = {
  connectDB,
};
