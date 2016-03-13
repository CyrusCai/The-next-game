'use strict';

// Load the module dependencies
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var _ = require('underscore');
var passport = require('passport');

// Define the Express configuration method
module.exports = function(db) {
// crethe the express app
var app = express();

// determine project root (pending better solution)
var path = require('path');
var appDir = path.dirname(require.main.filename);

// include express handlebars (templating engine)
var exphbs  = require('express-handlebars');

// specify the layout for our handlebars template
var hbs = exphbs.create({defaultLayout:  appDir + '/server/views/layouts/main'});
// setup handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', appDir + '/server/views');

require('./passport.js')();

//set session for user
app.use(session({ secret: 'anything', resave:false, saveUninitialized:false}));

// setup passport
app.use(passport.initialize());
app.use(passport.session());

// express middleware that parser the key-value pairs sent in the request body in the format of our choosing (e.g. json)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setup our public directory (which will serve any file stored in the 'public' directory)
app.use(express.static('public'));

// loading the routes
require('../server/routes/about')(app);
require('../server/routes/article')(app);
require('../server/routes/dashboard')(app);
require('../server/routes/index')(app);
require('../server/routes/login')(app);
require('../server/routes/register')(app);

return app;
}
