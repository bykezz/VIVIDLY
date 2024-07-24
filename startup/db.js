const winston = require("winston");
const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect("mongodb://localhost/vividly")
    .then(() => console.log("Connected to MongoDB..."));
};
