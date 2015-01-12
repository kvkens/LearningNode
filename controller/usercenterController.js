/**
 * 用户中心控制器
 */
var config = require("../config");
var moment = require("moment");
/**
 * 用户中心首页
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.index = function(req,res,next){
	res.render("usercenter/index",{
		config : config,
		loginInfo : req.session.userinfo,
		moment : moment,
		title : "用户个人中心"
	});
}