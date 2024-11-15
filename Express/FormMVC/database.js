const mongodb = require("mongodb").MongoClient;

const connectDB = async () => {
  let client = await mongodb.connect(process.env.MONGODB_URL);

  let database = client.db("formMVC");

  let collection = await database.createCollection("usersInfo");

  return collection;
};

module.exports = {
  connectDB,
};
