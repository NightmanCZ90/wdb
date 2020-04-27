var mongoose = require("mongoose");

// USER - email, name
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post"
		}
	] //we need to define postSchema first, otherwise it will be undefined
});
module.exports = mongoose.model("User", userSchema);