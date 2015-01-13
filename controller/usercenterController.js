/**
 * 用户中心控制器
 */
var config = require("../config");
var moment = require("moment");
var Album = require("../proxy/album");//用户中心对象
/**
 * 用户中心首页
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.index = function(req,res,next){
	Album.getAlbum(function(albums){
		res.render("usercenter/index",{
			config : config,
			loginInfo : req.session.userinfo,
			moment : moment,
			albums : albums,
			title : "用户个人中心"
		});
	});
	
}
/**
 * 上传我的专辑
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.addalbum = function(req,res,next){
	Album.addAlbum(req.body.album,function(err,success){
		if(success){
			res.redirect("/UserCenter");
		}else{
			res.redirect("/UserCenter");
		}
	});
	
}