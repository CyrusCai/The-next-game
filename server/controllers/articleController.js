'use strict';

var Article = require('mongoose').model('Article');

exports.get = function(req,res){
Article.find({},null,{sort:{data:-1}},function(err,data){
  Article.findById(data[req.params.id-1],function(err,article){
    if(!err){
      res.render('articles',{article:article});
    }else{
      res.send(404,'Article not found');
    }
  })
});
}