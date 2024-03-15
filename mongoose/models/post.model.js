const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true, min: 5 },
  content: { type: String, required: true, minLength: 5, maxLength: 255 },
});

const Post = model("Post", postSchema);

module.exports = Post
