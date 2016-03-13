var express = require('express');
var router = express.Router();
var _ = require('underscore');
var article = require('../models/ArticleModel.js');


router.get('/articles',function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','X-Requested-Width');

  article.find({},null,{sort:{data:-1}},function(err,data){
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

  article.find({},null,{sort:{data:-1}},function(err,data){

    article.findById(data[req.params.id-1],function(err,article){
      if(!err){
        res.json(article);
      }else{
        res.send(404,'File not found');
      }
    })
  });
});

module.exports = router;
