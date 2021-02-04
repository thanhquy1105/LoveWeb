const express = require("express");
const app = require("./app");
const connectDatabase = require("./config/database");
const { ImportShowDays } = require("./controllers/ShowDaysController");
const { ImportShowFull } = require("./controllers/ShowFullController");
const { ImportAvatar } = require("./controllers/AvatarController");
const { ImportLetter } = require("./controllers/LetterController");

const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 5000;

//Connecting to database
connectDatabase();

// ADD THIS LINE
app.use(express.static("client/build"));

ImportShowDays();
ImportShowFull();
ImportAvatar();
ImportLetter();

app.listen(PORT, () => {
  console.log(`Server st arted on PORT: ${PORT}.`);
});
