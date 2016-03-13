'use strict';

var Article = require('mongoose').model('Article');

exports.get = function(req,res){
  console.log('dashboard get');
  res.render('dashboard', {
      stuff: [{
        greeting: "Hello",
        subject: "World!"
    }],
    user: req.user
    });
};

exports.post = function(req,res){
 Article.find({},null,{sort:{data:-1}},function(err,data){
   // console.log(data.length);
   var article = new Article(req.body);
   article.id = data.length+1;
   article.author = req.body.author;
   article.save(function(err, article){
    if(err){
      console.log("fail to insert article");
    }else{
     console.log("no error");
     res.redirect('articles/' + article.id);
   }
 });
 });
}