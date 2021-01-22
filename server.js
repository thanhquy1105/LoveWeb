const app = require("./app");
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");
const { ImportShowDays } = require("./controllers/ShowDaysController");
const { ImportShowFull } = require("./controllers/ShowFullController");
const { ImportAvatar } = require("./controllers/AvatarController");
const PORT = process.env.PORT || 5000;

//Setting up config file
dotenv.config({ path: "config/config.env" });

//Connecting to database
connectDatabase();

ImportShowDays();
ImportShowFull();
ImportAvatar();

app.listen(PORT, () => {
  console.log(
    `Server st arted on PORT: ${PORT} in ${process.env.NODE_ENV} mode.`
  );
});
