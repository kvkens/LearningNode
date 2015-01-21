/**
 * 路由单元
 * @param  {[type]} app [description]
 * @return {[type]}     [description]
 */
var express = require("express");
var router = express.Router();
var safeCheck = require("./safeCheck");
var home = require("./controller/homeController");//首页控制器
var user = require("./controller/userController");//用户操作控制器
var usercenter = require("./controller/usercenterController");//用户中心控制器
var album = require("./controller/albumController");//专辑控制器


router.get("/",home.index);//首页
router.get("/Register",home.register);//注册页面
router.get("/RegisterSuccess",user.success);//注册成功页面
router.post("/Register",user.register);//注册逻辑
router.post("/Login",user.login);//注册页面
router.get("/Logout",user.logout);//注销
router.get("/UserCenter",safeCheck);//用户中心安全检测
router.get("/UserCenter",usercenter.index);//用户中心首页
router.post("/UserCenter/AlbumAdd",safeCheck);//检测上传专辑安全
router.post("/UserCenter/AlbumAdd",usercenter.addalbum);//我的专辑上传
router.get("/SongAdd/:id",safeCheck);//检测上传歌曲安全
router.get("/SongAdd/:id",usercenter.addsong);//我的歌曲上传页面
router.post("/SongUpload",safeCheck);//检测添加歌曲安全
router.post("/SongUpload",usercenter.songupload);//我的歌曲上传页面
router.get("/AlbumMusic/:id",album.indexalbum);//首页查看专辑页面
router.get("/ListenMusic/:id",album.listen);//音乐播放页面
router.get("/test",album.test);//添加测试页面
router.post("/upload",album.upload);//上传处理2
router.get("*",home.err404);//404

module.exports = router;