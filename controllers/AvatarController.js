const Avatar = require("../models/Avatar");

exports.ImportAvatar = async () => {
  const avatar = await Avatar.find();
  if (avatar == "") {
    const data = {
      const: "ILoveYou",
      Avatar_HeartColor: "#03a9f4",
      Avatar_LeftBorderColor: "#03a9f4",
      Avatar_RightBorderColor: "#03a9f4",
      Avatar_LeftTextColor: "#ffffff",
      Avatar_RightTextColor: "#ffffff",
      Avatar_LeftImageUrl:
        "https://res.cloudinary.com/dnjb58me8/image/upload/v1611475288/ILoveYou/avatar1_utp8sv.jpg",
      Avatar_RightImageUrl:
        "https://res.cloudinary.com/dnjb58me8/image/upload/v1611475296/ILoveYou/avatar2_helosa.jpg",
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
  info = await Avatar.findOneAndUpdate({ const: "ILoveYou" }, req.body);
  res.status(200).json({
    success: true,
  });
};
