const mongoose = require("mongoose");

const AvatarSchema = new mongoose.Schema({
  const: { type: String },
  Avatar_HeartColor: { type: String },
  Avatar_LeftBorderColor: { type: String },
  Avatar_RightBorderColor: { type: String },
  Avatar_LeftTextColor: { type: String },
  Avatar_RightTextColor: { type: String },
});

module.exports = mongoose.model("Avatar", AvatarSchema);
