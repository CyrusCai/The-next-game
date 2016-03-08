// include and setup express
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

//2016.3.7 mongodb
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/epam');
var Article = require('./models/ArticleModel.js');
var User = require('./models/UserModel.js');

// var Schema = mongoose.Schema;

// //create a  Schema for Articles
// var ArticleSchema = new Schema({
//   id:String,
//   title:String,
//   summary:String,
//   date:String,
//   author:String,
//   img:String
// });

// mongoose.model('Article',ArticleSchema);

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

// express middleware that parser the key-value pairs sent in the request body in the format of our choosing (e.g. json)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setup our public directory (which will serve any file stored in the 'public' directory)
app.use(express.static('public'));

app.use(function (req, res, next) {
 res.locals.scripts = [];
 next();
});

// respond to the get request with the home page
app.get('/', function (req, res) {
    res.locals.scripts.push('/js/main.js');
    // console.log(1);

    // var articles =  loadDate();
    // console.log(2);
    // console.log(articles);
    // res.render('home',articles);

    res.render('home');
});

// respond to the get request with the about page
app.get('/about', function(req, res) {
  res.render('about');
});

// respond to the get request with the article page
app.get('/articles/:id', function (req, res) {
 Article.find({},null,{sort:{data:-1}},function(err,data){
  Article.findById(data[req.params.id-1],function(err,article){
    console.log(article);
    if(!err){
      res.render('articles',{article:article});
    }else{
      res.send(404,'Article not found');
    }
  })
});
});

// respond to the get request with the register page
app.get('/register', function(req, res) {
  res.locals.scripts.push('/js/register.js');

  res.render('register');
});

// handle the posted registration data
app.post('/register', function(req, res) {

  // get the data out of the request (req) object
  // store the user in memory here
  var user = new User(req.body);
  user.save(function(err,user){
    if(err){
       console.log("fail to insert user");
    }else{
        console.log("no error");
        res.render('dashboard',{user:user});
    }
  })
});

// respond to the get request with dashboard page (and pass in some data into the template / note this will be rendered server-side)
  app.get('/dashboard', function (req, res) {
  res.locals.scripts.push('/js/dashboard.js');

    res.render('dashboard', {
    	stuff: [{
		    greeting: "Hello",
		    subject: "World!"
		}]
    });
});

// handle the posted article data

app.post('/dashboard', function(req, res) {
  Article.find({},null,{sort:{data:-1}},function(err,data){
   // console.log(data.length);
   var article = new Article(req.body);
   article.id = data.length+1;
   // console.log(article);

   article.save(function(err, article){
    if(err){
      console.log("fail to insert article");
    }else{
     console.log("no error");
     res.redirect('articles/' + article.id);
   }
 });
 });
});

// the api (note that typically you would likely organize things a little differently to this)
app.use('/api', api);

// create the server based on express
var server = require('http').createServer(app);

// start the server
server.listen(1337, '127.0.0.1', function () {
  console.log('The Next XYZ is looking good! Open http://localhost:%d to begin.', 1337);
});


