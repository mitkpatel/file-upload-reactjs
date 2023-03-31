"use strict";
const mongoose = require("mongoose");

var url =
  "mongodb+srv://mit:Kirkal1%40*09@mit.jfxf1.mongodb.net/upload-files-database";

module.exports = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to Mongodb......"));
};
