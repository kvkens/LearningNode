/**
 * 路由
 * @param  {[type]} app [description]
 * @return {[type]}     [description]
 */
var User = require("./model/User");
var config = require("./config");
module.exports= function(app){
	//首页
	app.get("/",function(req,res){
		res.render("index",{
			config:config,
			title : "首页"
		});
	});

	//注册页面
	app.get("/Register",function(req,res){
		res.render("user/register",{
			config:config,
			title : "注册",
			error : ""
		});
	});
	//注册处理逻辑
	app.post("/Register",function(req,res){
		//var userParamsObj = req.body.
	});
}