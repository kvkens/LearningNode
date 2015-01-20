/**
 * 专辑控制器
 */
var config = require("../config");
var Album = require("../proxy/album");//专辑对象
var fs = require("fs");

/**
 * 详情专辑的页面
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */

exports.indexalbum = function(req,res,next){
	var id = req.params.id;
	Album.getAlbumById(id,function(err,album){
		if(!err){
			if(album){
				res.render("album/index",{
					config : config,
					album : album,
					loginInfo : req.session.userinfo,
					title : album.albumname
				});
			}else{
				res.redirect("/");
			}
		}
	});
	
}


/**
 * 
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.listen = function(req,res,next){
	res.render("album/listen",{
		config : config,
		loginInfo : req.session.userinfo,
		title : "播放"
	});
}

/**
 * 上传
 * @return {[type]} [description]
 */
exports.upload = function(req,res,next){
	var upfile = req.files.upfile;
    var files = [];
    if (upfile instanceof  Array) {
        files = upfile;
    } else {
        files.push(upfile);
    }
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var path = file.path;
        var name = file.name;
        var target_path = "./upload/" + name;
        // fs.rename(path, target_path, function (err) {
        //     if (err) throw err;
        // });
        fs.readFile(path, function(err, data){
		    fs.writeFile(target_path, data, function(err){
		        if(err)console.log(err);
		        fs.rmdir(path,function(err){
		        	if(err)console.log(err);
		        	res.render("upload",{
						config : config,
						loginInfo : req.session.userinfo,
						title : "上传成功"
					});
		        });
		    });
		});

    }
    console.log(path);
    //todo delete path

}

/**
 * 测试方法
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.test = function(req,res,next){
	res.render("test",{
		config : config,
		loginInfo : req.session.userinfo,
		title : "测试上传"
	});
}