/**
 * 用户控制器
 */


var config = require("../config");//整站配置
var User = require("../proxy/user");//用户对象


exports.register = function(req,res,next){
	User.addUser(req.body.users.username,req.body.users.password,function(err,success){
		if(success){
			console.log(success);
			res.render("user/success",{
				config:config,
				title : "注册成功！"
			})
		}else{
			res.render("user/fail",{
				config:config,
				title : "注册失败，用户名重复！"
			})
		}
		
	});
}

exports.success = function(req,res,next){
	res.render("user/success",{
		config:config,
		title : "注册",
		tip : {
			error : "",
			info : "注册成功0"
		}
	});
}