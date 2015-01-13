var mongoose = require("mongoose");
var AlbumSchema = require("../schema/Album");
var Album = mongoose.model("Album",AlbumSchema);
module.exports = Album;