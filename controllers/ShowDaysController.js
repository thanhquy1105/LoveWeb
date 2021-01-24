const ShowDays = require("../models/ShowDays");

exports.ImportShowDays = async () => {
  const show_Days = await ShowDays.find();
  if (show_Days == "") {
    const data = {
      const: "ILoveYou",
      ShowDays_LoveColor: "#03a9f4",
      ShowDays_TextColor: "#fff",
      ShowDays_BackgroundUrl:
        "https://res.cloudinary.com/dnjb58me8/image/upload/v1611475262/ILoveYou/background_dqbw9x.jpg",
    };
    await ShowDays.create(data);
  }
};

exports.getShowDays = async (req, res, next) => {
  const info = await ShowDays.find();
  res.status(200).json({
    success: true,
    info,
  });
};

exports.updateShowDays = async (req, res, next) => {
  info = await ShowDays.findOneAndUpdate({ const: "ILoveYou" }, req.body);
  res.status(200).json({
    success: true,
  });
};
