const mongodb = require("mongodb").MongoClient;

const connectDB = async () => {
  let client = await mongodb.connect("mongodb://localhost/27017");

  let database = client.db("formMVC");

  let collection = await database.createCollection("usersInfo");

  return collection;
};

module.exports = {
  connectDB,
};
