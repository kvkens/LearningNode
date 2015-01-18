/**
 * 首页控制器
 */


var config = require("../config");//整站配置
var home = require("../proxy/home");
/**
 * 首页
 * @param  {[type]} req   [description]
 * @param  {[type]} res   [description]
 * @param  {[type]} netxt [description]
 * @return {[type]}       [description]
 */
exports.index = function(req,res,next){
	home.getIndexAlbums(function(albums){
		res.render("index",{
			config:config,
			title : config.title +" - 首页",
			albums : albums,
			loginInfo : req.session.userinfo
		});
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
		loginInfo : req.session.userinfo,
		tip : {
			error : "",
			info : ""
		}
	});
}

/**
 * 404
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.err404 = function(req,res,next){
	res.render("404",{
		config:config,
		loginInfo : req.session.userinfo,
		title : "首页"
	});
}