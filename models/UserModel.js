//create a  Schema for Articles

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name:String,
  email:String,
  password:String
});

UserSchema.method('validPassword', function(password, callback) {
    if (password == this.password) {
      return true;
    } else {
      return false;
    }
});


module.exports = mongoose.model('User',UserSchema);