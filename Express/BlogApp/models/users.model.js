const { Schema, model } = require("mongoose"); // destructuring
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // this will make sure that no duplicates emails are stored.
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
//! timestamps true will add two extra fields ==>
//  1) createdAt: stores the time at which document was created
//  2) modifiedAt: stores the time at which document was modified

//? pre - hooks
//! this will get executed before any saving operation performed in our collection
userSchema.pre("save", async function () {
  let randomString = await bcrypt.genSalt(10);
  // genSalt(n) = this method will generate a random string with n number many number of iterations
  let hashedPassword = await bcrypt.hash(this.password, randomString);
  // hash() will take input password and randomString as input and generate a hashed password
  this.password = hashedPassword;
  // then we are assigning that hashed password to out password field
});

//! to create any function, we use "schemaName.methods.function-name"
userSchema.methods.verifyPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = model("User", userSchema);

// http://localhost:9000/users/add
