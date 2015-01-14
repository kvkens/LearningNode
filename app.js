/**
 * 主文件
 * Kvkens
 */
var express = require("express");//引用express
var app = express();//得到对象
var path = require('path');//路径
var session = require('express-session');//session
var MongoStore = require('connect-mongo')(session);//session持久化
var bodyParser = require('body-parser');//解析form表单实体
var mongoose = require("mongoose");//mongoDB数据源连接
var webRouter = require("./webRouter");//页面路由

mongoose.connect('mongodb://localhost/my_database');//连接Mongodb
app.use(express.static(path.join(__dirname, 'assets')));//目录静态化
app.use(bodyParser.urlencoded({extended: true}));//表单解析控制
app.use(session({//session持久化配置
	secret: "kvkenssecret",
	key: "kvkenskey",
	cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},//超时时间
	resave: false,
  	saveUninitialized: true,
	store: new MongoStore({
		db: "my_database",
		host: "localhost",
		port: 27017
	})
}));
app.use("/",webRouter);//启用页面路由
app.set("view engine","ejs");//模板引擎ejs

var server = app.listen(process.env.PORT || 80,function(){
	console.log("启动成功访问：http://%s:%s",server.address().address,server.address().port);//服务启动
});