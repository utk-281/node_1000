const mongoose = require("mongoose");

// here we are creating a schema/ structure for the input data
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

// after that, we are defining a model/ collection based on that schema
module.exports = mongoose.model("Blog", blogSchema); // blogs ==> it will convert name into lowercase and plural
