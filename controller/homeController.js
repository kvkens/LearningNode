/**
 * 首页控制器
 */


var config = require("../config");//整站配置
/**
 * 首页
 * @param  {[type]} req   [description]
 * @param  {[type]} res   [description]
 * @param  {[type]} netxt [description]
 * @return {[type]}       [description]
 */
exports.index = function(req,res,next){
	res.render("index",{
		config:config,
		title : "首页"
	});
}
/**
 * 注册页面
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.register = function(req,res,next){
	res.render("user/register",{
		config:config,
		title : "注册",
		tip : {
			error : "",
			info : ""
		}
	});
}

exports.err404 = function(req,res,next){
	res.render("404",{
		config:config,
		title : "首页"
	});
}