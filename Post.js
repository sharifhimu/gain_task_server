const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Phone: String,
  Dob: String,
  Subjects: [String],

});
const Post = mongoose.model("post", PostSchema);
module.exports = Post;