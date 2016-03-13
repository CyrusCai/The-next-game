'use strict';

module.exports = function(app){
  // respond to the get request with the about page
app.get('/about', function(req, res) {
  res.render('about');
});

return app;
}