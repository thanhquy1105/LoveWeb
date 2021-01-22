const Avatar = require("../models/Avatar");

exports.ImportAvatar = async () => {
  const avatar = await Avatar.find();
  if (avatar == "") {
    const data = {
      Avatar_HeartColor: "#03a9f4",
      Avatar_LeftBorderColor: "#03a9f4",
      Avatar_RightBorderColor: "#03a9f4",
      Avatar_LeftTextColor: "#ffffff",
      Avatar_RightTextColor: "#ffffff",
    };
    await Avatar.create(data);
  }
};
exports.getAvatar = async (req, res, next) => {
  const info = await Avatar.find();
  res.status(200).json({
    success: true,
    info,
  });
};

exports.updateAvatar = async (req, res, next) => {
  info = await Avatar.findOneAndUpdate({ _id: req.params.id }, req.body);
  res.status(200).json({
    success: true,
    info,
  });
};
