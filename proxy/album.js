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
	// db.albums.find({},{_id:0,__v:0,password:0,pic:0,ischeck:0,uploader:0,song:0}).sort({"createtime":-1}).skip(0).limit(5);//current 1 show 5
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