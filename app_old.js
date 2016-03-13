// include and setup express
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var _ = require('underscore');
var passport = require('passport');
var mongoose = require('mongoose');1

mongoose.connect('mongodb://localhost/epam');1
var Article = require('./models/ArticleModel.js');1
var User = require('./models/UserModel.js');1

// include express handlebars (templating engine)
var exphbs  = require('express-handlebars');

// specify the layout for our handlebars template
var hbs = exphbs.create({defaultLayout: 'main'});

// crethe the express app
var app = express();

var api = require('./routes/api');

// setup handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

require('./server/js/passport.js')();

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

app.use(function (req, res, next) {
 res.locals.scripts = [];
 next();
});



// the api (note that typically you would likely organize things a little differently to this)
app.use('/api', api);

// create the server based on express
var server = require('http').createServer(app);

// start the server
server.listen(1337, '127.0.0.1', function () {
  console.log('The Next XYZ is looking good! Open http://localhost:%d to begin.', 1337);
});


