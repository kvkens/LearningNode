/**
 * 数据库模型Schema
 * 上传专辑实体
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var AlbumSchema = new Schema({
	uploader : String,
	albumname : String,
	musican : String,
	pic : String,
	song : [{
		songname : String,
		songurl : String
	}],
	ischeck : {
		type : Boolean,
		default : false
	},
	createtime : {
		type : Date,
		default: Date.now()
	}
});
module.exports = AlbumSchema;