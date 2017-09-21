var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/rest_test', { useMongoClient: true })
mongoose.Promise = require('bluebird');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', require('./routes/api'))
app.listen("8000");
console.log("listens to port 8000...")