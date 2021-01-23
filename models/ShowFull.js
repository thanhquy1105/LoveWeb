const mongoose = require("mongoose");

const ShowFullSchema = new mongoose.Schema({
  const: { type: String },
  ShowFull_HeartColor: { type: String },
  ShowFull_TextColor: { type: String },
  ShowFull_Opacity: { type: Number },
  ShowFull_State: { type: Number },
});

module.exports = mongoose.model("ShowFull", ShowFullSchema);
