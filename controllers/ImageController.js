const Image = require("../models/Image");

exports.ImportImage = async () => {
  const image = await Image.find();
  if (image == "") {
    const data = {
      const: "ILoveYou",
      ImageUrl: { type: String },
    };
    await Image.create(data);
  }
};

exports.getBackground = async (req, res, next) => {
  const getImage = await Image.find({ const: "ILoveYou" });
  res.json(getImage.backgroundUrl);
};

exports.uploadBackground = async (req, res, next) => {
  try {
    const newImage = new Image({
      const: "ILoveYou",
      ImageUrl: req.body.ImageUrl,
      ...Image,
    });
    await newImage.save();
    res.json(newImage.ImageUrl);
  } catch (err) {
    console.error("Something went wrong", err);
  }
};
