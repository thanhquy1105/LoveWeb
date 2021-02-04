const Letter = require("../models/Letter");

exports.ImportLetter = async () => {
  const letter = await Letter.find();
  if (letter == "") {
    const data = {
      const: "ILoveYou",
      TotalPage: 2,
      BackgroundUrl:
        "https://res.cloudinary.com/dnjb58me8/image/upload/v1612244166/ILoveYou/memory16_foz2yv.jpg",
      FrontUrl:
        "https://res.cloudinary.com/dnjb58me8/image/upload/v1612244217/ILoveYou/memory15_d91lyd.jpg",
      BackUrl:
        "https://res.cloudinary.com/dnjb58me8/image/upload/v1612244177/ILoveYou/memory4_zotia9.jpg",
      Letter: [],
      Quote: [
        "I am happiest when I’m right next to you.",
        "The water shines only by the sun. And it is you who are my sun.",
        "My night has become a sunny dawn because of you.",
        "I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow.",
        "The best thing to hold onto in life is each other.",
        "You may hold my hand for a while, but you hold my heart forever.",
        "You are the last thought in my mind before I drift off to sleep and the first thought when I wake up each morning.",
        "I need you like a heart needs a beat.",
        "Your love is all I need to feel complete.",
        "I will love you until the stars go out, and the tides no longer turn.",
        "Come live in my heart and pay no rent.",
        "Every time I see you, I fall in love all over again.",
        "You are my song. You are my song of love.",
        "If I know what love is, it is because of you.",
        "There are only two times that I want to be with you. Now and Forever.",
        "Love is like the wind, you can’t see it but you can feel it.",
        "It is true that my heart always skips a beat when you take my name.",
        "You have no idea how hard it is to force myself to stop thinking about you sometimes.",
        "You can’t blame gravity for falling in love.",
        "To the world, you may be one person, but to one person you are the world.",
        "Being In Love With You Makes Every Morning Worth Getting Up For",
        "“I love you” means that I will love you and stand by you even through the worst of times.",
        "Sometimes I can’t see myself when I’m with you. I can only just see you.",
        "I’m much more me when I’m with you.",
        "I love you – those three words have my life in them.",
      ],
    };
    await Letter.create(data);
  }
};

exports.getLetter = async (req, res, next) => {
  const info = await Letter.find();
  res.status(200).json({
    success: true,
    info,
  });
};

exports.updateLetter = async (req, res, next) => {
  info = await Letter.findOneAndUpdate(
    { const: "ILoveYou" },
    { TotalPage: req.body.TotalPage, $push: { Letter: req.body.Letter } }
  );
  res.status(200).json({
    success: true,
  });
};
