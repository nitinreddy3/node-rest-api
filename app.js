var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/bookstore');

var db = mongoose.connection;

app.get('/', (req, res) => {
    res.send('Hello Puja Rani')
})

app.listen("8000");
console.log("listens to port 8000...")