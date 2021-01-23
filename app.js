const express = require("express");
const app = express();

//Import all routes

const info = require("./routes/info");

app.use("/api", info);

module.exports = app;
