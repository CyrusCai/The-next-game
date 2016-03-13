'use strict';
//respond to the request message with the regist page

module.exports = function(app){
var controller = require('../controllers/registerController');

app.get('/register', function(req, res) {
  res.render('register');
});

app.post('/register',controller.post);

return app;
};

