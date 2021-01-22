const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join("./client/build/index.html"));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}

//Import all routes

const info = require("./routes/info");

app.use("/api", info);

module.exports = app;
