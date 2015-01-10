/**
 * 主文件
 * Kvkens
 */
var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var webRouter = require("./webRouter");
mongoose.connect('mongodb://localhost/my_database');
//mongoose.connect("mongodb://8SegwE8N:7P9g4Q781E36@mongo-1-2.jae.jd.com/kvkens_mongo_e691g6ko");
app.use(express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.urlencoded({extended: true}));
app.use("/",webRouter);
app.set("view engine","ejs");
var server = app.listen(process.env.PORT || 3000,function(){
	console.log("启动成功访问：http://%s:%s",server.address().address,server.address().port);
});