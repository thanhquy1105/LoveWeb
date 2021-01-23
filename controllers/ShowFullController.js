const ShowFull = require("../models/ShowFull");

exports.ImportShowFull = async () => {
  const show_Full = await ShowFull.find();
  if (show_Full == "") {
    const data = {
      const: "ILoveYou",
      ShowFull_HeartColor: "#03a9f4",
      ShowFull_TextColor: "#ffffff",
      ShowFull_Opacity: 1,
      ShowFull_State: 3,
    };
    await ShowFull.create(data);
  }
};

exports.getShowFull = async (req, res, next) => {
  const info = await ShowFull.find();
  res.status(200).json({
    success: true,
    info,
  });
};

exports.updateShowFull = async (req, res, next) => {
  info = await ShowFull.findOneAndUpdate({ const: "ILoveYou" }, req.body);
  res.status(200).json({
    success: true,
  });
};
