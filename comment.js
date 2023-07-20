// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to mongodb
mongoose.connect('mongodb://localhost/comment');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
  console.log('Connected to mongodb');
});

// Define schema
var commentSchema = mongoose.Schema({