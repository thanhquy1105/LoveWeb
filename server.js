const express = require("express");
const app = express();
const connectDatabase = require("./config/database");
const { ImportShowDays } = require("./controllers/ShowDaysController");
const { ImportShowFull } = require("./controllers/ShowFullController");
const { ImportAvatar } = require("./controllers/AvatarController");

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connecting to database
connectDatabase();

// ADD THIS LINE
app.use(express.static("client/build"));

ImportShowDays();
ImportShowFull();
ImportAvatar();

app.listen(PORT, () => {
  console.log(
    `Server st arted on PORT: ${PORT} in ${process.env.NODE_ENV} mode.`
  );
});
