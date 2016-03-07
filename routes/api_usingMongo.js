var express = require('express');
var router = express.Router();
var _ = require('underscore');


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create a  Schema for Articles
var ArticleSchema = new Schema({
  x:String,
  name:String,
  abc:String,
  psw:String,
  age:String
});
  //why use article

mongoose.model('Article',ArticleSchema);
var Article =  mongoose.model('Article');

// note that typically data would NOT be loaded from the filesystem in this manner :)
// The original router.get('/articles'
// router.get('/articles', function(req, res, next) {

//  var fs = require('fs');
//  var obj;
//  fs.readFile('./data/articles.json', 'utf8', function (err, data) {
//    if (err) throw err;
//    res.json(JSON.parse(data));
//  });
// });

router.get('/articles',function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','X-Requested-Width');

  Article.find({},null,{sort:{data:-1}},function(err,data){
    console.log(data);
    res.json(data);
  })
});


// router.get('/articles/:id', function(req, res, next) {

//  var fs = require('fs');
//  var obj;
//  fs.readFile('./data/articles.json', 'utf8', function (err, data) {
//    if (err) throw err;

//    data = _.filter(JSON.parse(data), function(item) {
//        return item.id == req.params.id;
//    });

//    res.json(data);
//  });
// });

router.get('/articles/:id', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','X-Requested-Width');

  Article.find({},null,{sort:{data:-1}},function(err,data){

    Article.findById(data[req.params.id-1],function(err,article){
      if(!err){
        res.json(article);
      }else{
        res.send(404,'File not found');
      }
    })
  });
});

module.exports = router;
