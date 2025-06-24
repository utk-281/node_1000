const { Schema, model } = require("mongoose");

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
      minlength: [10, "minimum 10 words are required"],
    },
    image: {
      type: String,
      default: "default-img-link",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      //   required:true
    },
  },
  { timestamps: true }
);

module.exports = model("Blog", blogSchema);
