'use strict';

var Article = require('mongoose').model('Article');

exports.home = function(req,res){
    Article.find({},null,{sort:{data:-1}},function(err,article){
      res.render('home',{article:article});
    });
}
