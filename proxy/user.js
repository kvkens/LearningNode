/**
 * 用户功能实现
 * @type {[type]}
 */
var User = require("../model/User");
var crypto = require('crypto');

/**
 * 添加用户
 * @param {[type]}   username [description]
 * @param {[type]}   password [description]
 * @param {Function} cb       [description]
 */
exports.addUser = function(username,password,cb){

	User.findOne({ username: username }).exec(function(err,_user){
		if(_user != null){
			cb(null,false);
		}else{
			var md5 = crypto.createHash('md5');
      		password = md5.update(password).digest('hex');
			var user = new User({
				username : username,
				password : password,
				createtime : Date.now()
			});
			user.save(function(err,entity){
				cb(null,true);
			});
			
		}
	});


}

/**
 * 通过用户查询用户信息
 * @param  {[type]}   username [description]
 * @param  {[type]}   password [description]
 * @param  {Function} cb       [description]
 * @return {[type]}            [description]
 */
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

/**
 * 根据用户来添加积分
 * @param {[type]}   username [description]
 * @param {[type]}   point    [description]
 * @param {Function} cb       [description]
 */
exports.addPointByName = function(username,point,cb){
	// User.findOne({username : username},function(err,user){
	// 	if(user){
	// 		user.points = user.points + point;
	// 		user.save(cb);
	// 	}else{
	// 		cb("add point err!");
	// 	}
	// });
	
	//使用修改器重写
	User.update({username : username},{"$inc" : { points : point }},cb);
}

/**
 * 获取前10名积分排行
 * @return {[type]} [description]
 */
exports.getTop10 = function(){
	User.find({});
}