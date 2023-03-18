const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const { addItem } = require("./controller/controller");

//db connection
mongoose.connect("mongodb://localhost:27017/APEX");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Database connected successfully");
});

//middleware
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

//API
app.post("/list", addItem);

//host server
app.listen(3000, () => {
  console.log("\n\nServer running ...\nClick here: http://localhost:3000/ ");
});
