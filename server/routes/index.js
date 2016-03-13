'use strict';

module.exports = function(app){
  //load index controller
  var controller = require("../controllers/indexController");

  //respond to the get request with the home page
  // app.get('/', controller.home);
  app.get('/', controller.home);
}