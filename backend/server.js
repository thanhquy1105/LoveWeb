const app = require("./app");
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");
const { ImportInfo } = require("./controllers/infoController");

//Setting up config file
dotenv.config({ path: "backend/config/config.env" });

//Connecting to database
connectDatabase();
ImportInfo();
app.listen(process.env.PORT, () => {
  console.log(
    `Server st arted on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
