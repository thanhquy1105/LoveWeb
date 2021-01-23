const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());

//Import all routes

const info = require("./routes/info");

app.use("/api", info);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join("./client/build/index.html"));
});

module.exports = app;
