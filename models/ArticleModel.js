//create a  Schema for Articles

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
  id:String,
  title:String,
  summary:String,
  date:String,
  author:String,
  image:String
});

module.exports = mongoose.model('Article',ArticleSchema);