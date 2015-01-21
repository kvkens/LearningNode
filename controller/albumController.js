/**
 * 专辑控制器
 */
var config = require("../config");
var Album = require("../proxy/album");//专辑对象
var fs = require("fs");

/**
 * 详情专辑的页面
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */

exports.indexalbum = function(req,res,next){
	var id = req.params.id;
	Album.getAlbumById(id,function(err,album){
		if(!err){
			if(album){
				res.render("album/index",{
					config : config,
					album : album,
					loginInfo : req.session.userinfo,
					title : album.albumname
				});
			}else{
				res.redirect("/");
			}
		}
	});
	
}


/**
 * 
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.listen = function(req,res,next){
	res.render("album/listen",{
		config : config,
		loginInfo : req.session.userinfo,
		title : "播放"
	});
}

/**
 * 上传
 * @return {[type]} [description]
 */
exports.upload = function(req,res,next){
	res.render("upload",{
		config : config,
		body : req.body,
		files : req.files,
		loginInfo : req.session.userinfo,
		title : "上传成功"
	});

}



/**
 * 测试方法
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.test = function(req,res,next){
	res.render("test",{
		config : config,
		loginInfo : req.session.userinfo,
		title : "测试上传"
	});
}