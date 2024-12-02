const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name field is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email field is required"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password field is required"],
      trim: true,
      minlength: 5,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    profilePicture: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
