'use strict';
// respond to the get request with dashboard page (and pass in some data into the template / note this will be rendered server-side)
module.exports = function(app){
  var controller = require('../controllers/dashboardController');
  app.get('/dashboard',controller.get);
  return app;
}