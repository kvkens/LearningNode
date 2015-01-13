/**
 * 数据库模型Schema
 * 用户实体
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	username : String,
	password : String,
	points : {
		type : Number,
		default : 0
	},
	createtime : {
		type : Date,
		default: Date.now()
	}
});
module.exports = UserSchema;