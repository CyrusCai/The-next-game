'use strict';

var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');

var db = mongoose();

// // Create a new Express application instance
var app = express(db);

// // Configure the Passport middleware
var passport = passport();
// // Use the Express application instance to listen to the '3000' port
app.listen(1337);

// // Log the server status to the console
console.log('The Next XYZ is looking good! Open http://localhost:1337 to begin.');

// // Use the module.exports property to expose our Express application instance for external usage
module.exports = app;