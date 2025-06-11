//! steps to create a schema
//~ 1) import mongoose
//~ 2) define a schema
//~ 3) create a model/collection
//~ 4) export

//? 1) ==>
const mongoose = require("mongoose");

//? 2) ==> create an object of mongoose.Schema class.
let userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    contactNo: {
      type: Number,
    },
    password: {
      type: String,
      minlength: 5,
    },
  },
  //! options object
  {
    timestamps: true, // this will create created_at and updated_at
  }
);

//? 3) ==> create a collection/model with the help of model("collectionName", schemaName)
let myCollection = mongoose.model("User", userSchema); // singular and first letter capital (standard)
//! collection will be created in db with the name ==> users (lowercase + plural)

//? 4)
module.exports = myCollection;
