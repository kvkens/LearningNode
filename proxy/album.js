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
exports.addAlbum = function(album,uploader,cb){
	var album = new Album({
		albumname : album.albumname,
		musican : album.musican,
		pic : album.pic,
		uploader : uploader,
		createtime : Date.now()
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
exports.getAlbum = function(username,cb){
	//TO DO : user center paging
	Album.find({uploader:username}).sort("-createtime").exec(function(err,albums){
		if(err){

		}else{
			cb(albums);
		}
	});
}

/**
 * 获取专辑信息来自ID
 * @param  {[type]}   id [description]
 * @param  {Function} cb [description]
 * @return {[type]}      [description]
 */
exports.getAlbumById = function(id,cb){
	Album.findOne({_id:id}).exec(cb);
}