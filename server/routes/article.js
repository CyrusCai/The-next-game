'use strict';


module.exports = function(app){
  var controller = require('../controllers/articleController');
  app.get('/articles/:id',controller.get);
  return app;
}