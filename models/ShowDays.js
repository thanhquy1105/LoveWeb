const mongoose = require("mongoose");

const ShowDaysSchema = new mongoose.Schema({
  const: { type: String },
  ShowDays_LoveColor: { type: String },
  ShowDays_TextColor: { type: String },
});

module.exports = mongoose.model("ShowDays", ShowDaysSchema);
