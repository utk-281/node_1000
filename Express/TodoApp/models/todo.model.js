const { Schema, model } = require("mongoose");

const todoSchema = new Schema(
  {
    title: {
      type: String,
      require: [true, "custom message"],
      trim: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["on going", "pending", "completed"],
      default: "pending",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = model("Todo", todoSchema);
