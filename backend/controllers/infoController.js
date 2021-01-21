const Info = require("../models/info");

exports.ImportInfo = async () => {
  const info = await Info.find();
  console.log(info);
  if (info == "") {
    const data = {
      ShowDays_LoveColor: "#03a9f4",
      ShowDays_TextColor: "#fff",
      ShowFull_HeartColor: "#03a9f4",
      ShowFull_TextColor: "#ffffff",
      ShowFull_Opacity: 1,
      ShowFull_State: 3,
      Avatar_HeartColor: "#03a9f4",
      Avatar_LeftBorderColor: "#03a9f4",
      Avatar_RightBorderColor: "#03a9f4",
      Avatar_LeftTextColor: "#ffffff",
      Avatar_RightTextColor: "#ffffff",
    };
    const info1 = await Info.create(data);
    console.log(info1);
  }
};
//Create new Info =>
exports.createInfo = async (req, res, next) => {
  const info = await Info.create(req.body);
  res.status(200).json({
    success: true,
    info,
  });
};

exports.getInfo = async (req, res, next) => {
  const info = await Info.find();
  res.status(200).json({
    success: true,
    count: info.length,
    info,
  });
};

//Update info =>

exports.updateInfo = async (req, res, next) => {
  info = await Info.findOneAndUpdate({ _id: req.params.id }, req.body);
  res.status(200).json({
    success: true,
    info,
  });
};
