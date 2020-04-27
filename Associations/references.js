var mongoose = require("mongoose");

mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/blog_demo_2", { useNewUrlParser: true});

var Post = require("./models/post");
var User = require("./models/user");

Post.create({
	title: "Cooking for Dummies Pt 4",
	content: "Pour it in a cup"
}, function(err, post){
		User.findOne({email: "bob@sezam.cz"}, function(err, foundUser){
			if(err){
				console.log(err)
			} else {
				foundUser.posts.push(post._id);
				foundUser.save(function(err, data){
					if(err){
						console.log(err)
					} else {
						console.log(data)
					}
				});
			}
		});
});

// User.create({
// 	email: "bob@sezam.cz",
// 	name: "Bob Belson"
// });

// Find user          // Find all posts for that user
// User.findOne({email: "bob@sezam.cz"}).populate("posts").exec(function(err, user){
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(user)
// 	}
// });



