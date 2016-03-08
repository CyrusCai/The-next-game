// 'use strict';
// var mongoose = require('mongoose');

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
// var Article =  mongoose.model('Article');

// $('form').submit(function(e){
//   var ObjectId = require('mongodb').ObjectID;
//   var article ={
//     _id: ObjectId,
//     title: $('#title').val(),
//     summary:$('#summary').val(),
//     author:$('author').val(),
//     image:$('image').val()
//   }
// Article.insert(article);
// });