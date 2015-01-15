/**
 * 用户中心控制器
 */
var config = require("../config");
var moment = require("moment");
var Album = require("../proxy/album");//专辑对象
var User = require("../proxy/user");//用户对象
/**
 * 用户中心首页
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.index = function(req,res,next){
	Album.getAlbum(req.session.userinfo.username,function(albums){
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
	var username = req.session.userinfo.username;
	Album.addAlbum(req.body.album,req.session.userinfo.username,function(err,success){
		if(success){
			User.addPointByName(username,1,function(err){
				res.redirect("/UserCenter");
			});
		}else{
			res.redirect("/UserCenter");
		}
	});
	
}

/**
 * 添加歌曲的页面
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.addsong = function(req,res,next){
	var albumid = req.params.id;
	Album.getAlbumById(albumid,function(err,album){
		if(album){
			res.render("usercenter/songadd",{
				config : config,
				loginInfo : req.session.userinfo,
				album : album,
				title : "上传专辑歌曲"
			});
		}else{
			res.redirect("/");
		}
	});
}

/**
 * 添加歌曲处理
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.songupload = function(req,res,next){
	var albumid = req.body.song.id;
	Album.getAlbumById(albumid,function(err,album){
		album.song.push(req.body.song);
		album.save(function(err){
			if(!err){
				res.redirect("/UserCenter");
			}
		});
		
	});
	
}
