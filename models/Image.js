const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  const: { type: String },
  ImageUrl: { type: String },
  Data: { type: String },
});

module.exports = mongoose.model("Image", ImageSchema);
