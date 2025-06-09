const { MongoClient } = require("mongodb");

const connectDB = async () => {
  let client = await MongoClient.connect("mongodb://127.0.0.1:27017");
  let database = client.db("feedback_form_mvc");
  let collection = database.collection("feedbacks");
  return collection;
};

module.exports = { connectDB };

// let { name } = emp;
// let { age } = emp;
// // let { address } = emp;
// let { city } = req.body;
// // console.log(address);
