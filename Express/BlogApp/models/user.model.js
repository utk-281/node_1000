const mongoose = require("mongoose");

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
    blogs: [
      {
        blogID: mongoose.Schema.Types.ObjectId,
        // ref: "Blog", //TODO:
      },
    ],
  },
  { timestamps: true } //createdAt and updatedAt
);

module.exports = mongoose.model("User", userSchema);

/*
{
    name:"abc",
    password:"1234",
    email:"abc@gmail.com",
    totalBlogs:2
    blogs:[{blogID:123}, {blogID:234}]
}
*/
