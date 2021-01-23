const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const info = require("./routes/info");

app.use("/api", info);

module.exports = app;
