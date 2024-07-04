const express = require("express");
const app = express();
const mogoose = require("mongoose");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://mil-admin:mili1234@cluster0.rjpw6or.mongodb.net/mil12",
  { userNewUrlParser: true },
  { useUnifiedTopology: true }
);

//dataschema

const usersSchema = {
  emri: String,
  emaili: String,
};

const User = mongoose.model("Users", usersSchema);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
  console.log("server is running on 3000");
});
