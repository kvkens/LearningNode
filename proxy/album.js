/**
 * 专辑功能实现
 * @type {[type]}
 */
var Album = require("../model/Album");

/**
 * 上传我的专辑
 * @param {[type]}   album [description]
 * @param {Function} cb    [description]
 */
exports.addAlbum = function(album,cb){
	console.log(album);
	var album = new Album({
		albumname : album.albumname,
		musican : album.musican,
		pic : album.pic,
		createtime : new Date()
	});
	album.save(function(err,_album){
		if(err){
			cb(err,false);
		}else{
			cb(null,true);
		}
	});
}

/**
 * 获取我的专辑
 * @return {[type]} [description]
 */
exports.getAlbum = function(cb){
	Album.find({},function(err,albums){
		if(err){

		}else{
			cb(albums);
		}
	});
}
