/**
 * 专辑控制器
 */
var config = require("../config");
var Album = require("../proxy/album");//专辑对象


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