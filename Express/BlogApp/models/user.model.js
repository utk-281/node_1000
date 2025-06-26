const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    totalBlogs: {
      type: Number,
      default: 0,
    },
    blogs: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true } //createdAt and updatedAt
);

//! this is a pre-hook: whenever a new resource is about to be created in db, this pre-hook will be executed first
//? hashing ==> for encrypting the password, it is a one way process, which means we can't decrypt the password
//~ 1) a random string is generated (salt)
//~ 2) salt is hashed with password (hp)
//~ 3) this (hp) is stored in db
userSchema.pre("save", async function () {
  /* missing */
  let salt = await bcryptjs.genSalt(10);
  let hashedPassword = await bcryptjs.hash(this.password, salt);
  this.password = hashedPassword;
});

//~ compare password (user-defined method)
//! schemaName.methods.method-name = function(){}
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcryptjs.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
