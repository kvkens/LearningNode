/**
 * 首页
 * @type {[type]}
 */
var Album = require("../model/Album");


/**
 * 显示所有专辑
 * @param  {Function} cb [description]
 * @return {[type]}      [description]
 */
exports.getIndexAlbums = function(cb){
	Album.find({}).sort("-createtime").exec(function(err,albums){
		if(err){

		}else{
			cb(albums);
		}
	});
}