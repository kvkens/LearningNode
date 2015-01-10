/**
 * 路由单元
 * @param  {[type]} app [description]
 * @return {[type]}     [description]
 */
var express = require("express");
var router = express.Router();
var home = require("./controller/homeController");

router.get("/",home.index);//首页
router.get("/Register",home.register);//注册页面
router.get("*",home.err404);//404
module.exports = router;