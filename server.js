var express = require("express");
var app = express();
var bp = require("body-parser");
var path = require("path");
var session = require("express-session");

app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, "./node_modules")));
app.use(
  session({
    secret: "yankeedoodle",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(bp.json());

app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.listen(8000, function () {
  console.log("listening on 8000");
});
