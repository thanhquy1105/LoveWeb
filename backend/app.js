const express = require("express");
const app = express();

app.use(express.json());
//Import all routes

const info = require("./routes/info");

app.use("/api", info);

module.exports = app;
