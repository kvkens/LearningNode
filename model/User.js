var mongoose = require("mongoose");
var UserSchema = require("../schema/User");
var User = mongoose.model("User",UserSchema);
module.exports = User;