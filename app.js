const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());

//Import all routes

const info = require("./routes/info");

app.use("/api", info);

module.exports = app;
