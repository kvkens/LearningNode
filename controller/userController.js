/**
 * 用户控制器
 */


var config = require("../config");//整站配置

exports.index = function(req,res,netxt){
	res.render("index",{
		config:config,
		title : "首页"
	});
}