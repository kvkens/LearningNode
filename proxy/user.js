/**
 * 用户功能实现
 * @type {[type]}
 */
var User = require("../model/User");
var crypto = require('crypto');

exports.addUser = function(username,password,cb){

	User.findOne({ username: username }).exec(function(err,_user){
		if(_user != null){
			cb(null,false);
		}else{
			var md5 = crypto.createHash('md5');
      		password = md5.update(password).digest('hex');
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

exports.loginByNamePwd = function(username,password,cb){
	var md5 = crypto.createHash('md5');
    var password = md5.update(password).digest('hex');
	User.findOne({username:username,password:password},function(err,_user){
		if(err){
			cb(err,_user);
		}
		cb(null,_user);
	});

}