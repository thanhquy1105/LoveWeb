const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema({
  ShowDays_LoveColor: { type: String },
  ShowDays_TextColor: { type: String },
  ShowFull_HeartColor: { type: String },
  ShowFull_TextColor: { type: String },
  ShowFull_Opacity: { type: Number },
  ShowFull_State: { type: Number },
  Avatar_HeartColor: { type: String },
  Avatar_LeftBorderColor: { type: String },
  Avatar_RightBorderColor: { type: String },
  Avatar_LeftTextColor: { type: String },
  Avatar_RightTextColor: { type: String },
});

module.exports = mongoose.model("Info", InfoSchema);
