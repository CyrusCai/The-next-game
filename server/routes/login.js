'use strict';
// respond to the get/post request with the login page

var passport = require('passport');
require('../../config/passport')();

module.exports=function(app){
app.get('/login',function(req,res){
  res.render('login');
});

app.post('/login',function(req,res){
 passport.authenticate('local',
    {
      successRedirect: '/dashboard',
      failureRedirect: '/login'
    })
});

return app;
}