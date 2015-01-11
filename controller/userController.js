/**
 * 用户控制器
 */


var config = require("../config");//整站配置
var User = require("../proxy/user");//用户对象


exports.register = function(req,res,next){
	User.addUser(req.body.users.username,req.body.users.password,function(err,success){
		if(success){
			res.render("user/success",{
				config : config,
				loginInfo : req.session.userinfo,
				title : "注册成功！"
			})
		}else{
			res.render("user/fail",{
				config : config,
				loginInfo : req.session.userinfo,
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
			loginInfo : req.session.userinfo,
			info : "注册成功0"
		}
	});
}

exports.login = function(req,res,next){
	User.loginByNamePwd(req.body.user.username,req.body.user.password,function(err,_user){
		if(_user != null){
			req.session.userinfo = _user;
			res.redirect("/");
		}else{
			res.render("user/fail",{
				config : config,
				loginInfo : req.session.userinfo,
				title : "登陆失败！用户名或密码不正确噢，请重新登陆！"
			});	
		}
	});
}

exports.logout = function(req,res,next){
	req.session.userinfo = undefined;
	res.redirect("/");
}