var User = require("../model/User");

exports.addUser = function(username,password,cb){

	User.find({ username: username }).exec(function(err,_user){
		if(_user.length != 0){
			cb(null,false);
		}else{
			var user = new User({
				username : username,
				password : password
			});
			user.save(function(err,entity){
				cb(null,true);
			});
			
		}
	});


}