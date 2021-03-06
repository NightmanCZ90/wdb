var mongoose							= require("mongoose"),
		passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
	username: String,
	password: String
});
//after defining Schema
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);