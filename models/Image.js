const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  ImageUrl: { type: String },
  Date: { type: String },
  MyFeel: { type: String },
  YourFeel: { type: String },
});

module.exports = mongoose.model("Image", ImageSchema);
