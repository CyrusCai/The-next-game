'use strict';
var User = require('mongoose').model('User');

exports.post = function(req,res){
  var user = new User(req.body);
  user.save(function(err,user){
    if(err){
     console.log("fail to insert user");
   }else{
    console.log("no error");
    res.render('login');
  }
  })
};