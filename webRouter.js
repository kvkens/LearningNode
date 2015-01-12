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


router.get("/",home.index);//首页
router.get("/Register",home.register);//注册页面
router.get("/RegisterSuccess",user.success);//注册成功页面
router.post("/Register",user.register);//注册逻辑
router.post("/Login",user.login);//注册页面
router.get("/Logout",user.logout);//注销
router.get("/UserCenter",safeCheck);
router.get("/UserCenter",usercenter.index);
router.get("*",home.err404);//404
module.exports = router;