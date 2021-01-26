const Image = require("../models/Image");
var ObjectId = require("mongodb").ObjectID;

exports.ImportImage = async () => {
  // const image = await Image.find();
  // if (image == "") {
  //   const data = {
  //     const: "ILoveYou",
  //     ImageUrl: { type: String },
  //   };
  //   await Image.create(data);
  // }
};

exports.getAllImage = async (req, res, next) => {
  const images = await Image.find({});
  res.status(200).json({
    success: true,
    images,
  });
};

exports.getImage = async (req, res, next) => {
  const aImage = await Image.find({ _id: ObjectId(req.params.id) });
  res.status(200).json({
    success: true,
    aImage,
  });
};

exports.insertImage = async (req, res, next) => {
  const i = await Image.countDocuments({});
  const temp = {
    index: i + 1,
    ...req.body,
  };
  await Image.insertMany(temp);
  res.status(200).json({
    success: true,
  });
};

exports.updateImage = async (req, res, next) => {
  await Image.findOneAndUpdate({ _id: ObjectId(req.params.id) }, req.body);
  res.status(200).json({
    success: true,
  });
};
