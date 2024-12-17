const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("node:crypto");

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
    resetPasswordToken: {
      // this field is used for resetting password
      type: String,
    },
    resetPasswordTokenExpire: {
      // this field checks the expiry of reset password token
      type: Date,
    },
  },
  { timestamps: true }
);

// hashing password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  let salt = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
});

// matching password
userSchema.methods.verifyPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateResetPasswordToken = function () {
  //! generate token
  let resetToken = crypto.randomBytes(20).toString("hex");
  // using randomBytes(number) we are generating a token of 20 bytes and converting it to hexadecimal
  console.log(resetToken);

  //! hash the token and store it in the database
  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  // console.log(this.resetPasswordToken);

  //! set expiry date --> token
  this.resetPasswordTokenExpire = Date.now() + 30 * 60 * 1000;

  //! return token
  return resetToken;
};

module.exports = model("User", userSchema);

// http://localhost:9000/users/v1/reset-password/4542b2bc43ebec5bcf7d0e83314c5133ad7bd399
