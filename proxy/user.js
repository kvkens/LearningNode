var User = require("../model/User");


exports.addUser = function(username,password,callback){
	var user = new User();
	user.username = username;
	user.password = password;
	user.save(callback);
}