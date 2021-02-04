const mongoose = require("mongoose");

const Letter = new mongoose.Schema({
  imageUrl: { type: String },
  title: { type: String },
  date: { type: String },
  content: { type: String },
});

const LetterSchema = new mongoose.Schema({
  const: { type: String },
  TotalPage: { type: Number },
  BackgroundUrl: { type: String },
  FrontUrl: { type: String },
  BackUrl: { type: String },
  Letter: [Letter],
  Quote: [String],
});

module.exports = mongoose.model("Letter", LetterSchema);
