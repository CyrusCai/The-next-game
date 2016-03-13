 'use strict';
 var mongoose = require('mongoose');
 var config = require('./config.js');


module.exports = function(){

 var db = mongoose.connect(config.db);
 require('../server/models/ArticleModel');
 require('../server/models/UserModel');

 return db;
}