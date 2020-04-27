var mongoose = require("mongoose");

mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/blog_demo", { useNewUrlParser: true});

// POST - title, content
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema] //we need to define postSchema first, otherwise it will be undefined
});
var User = mongoose.model("User", userSchema);

// var newUser = new User({
// 	email: "hermione@hogwarts.co.uk",
// 	name: "Emma Watson"
// });

// newUser.posts.push({
// 	title: "How to brew polyjuice potion",
// 	content: "Do not use cat hair"
// });

// newUser.save(function(err, user){
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(user)
// 	}
// });

// var newPost = new Post({
// 	title: "Reflections on Apples",
// 	content: "Yammy"
// });

// newPost.save(function(err, post){
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(post)
// 	}
// });


User.findOne({name: "Emma Watson"}, function(err, user){
	if(err){
		console.log(err);
	} else {
		user.posts.push({
			title: "Someone I really love",
			content: "I Love Jan"
		});
		user.save(function(err, user){
			if(err){
				console.log(err)
			} else {
				console.log(user)
			}
		});
	}
});