module.exports = function(req,res,next){
	if(!req.session.userinfo){
		res.redirect("/");
		return;
	}
	next();
}