var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Cloud's Rest",
		image: "https://images.unsplash.com/photo-1528433556524-74e7e3bfa599?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus mollitia, reprehenderit nostrum porro quasi libero placeat aliquam, rerum a ipsum dicta, itaque ut consectetur necessitatibus est inventore deserunt sunt animi quo! Perferendis consequatur nesciunt error, perspiciatis ipsum, ipsam in, tempora saepe minus amet quasi ratione autem sed, explicabo assumenda repudiandae."
	},
	{
		name: "Dessert Mesa",
		image: "https://images.unsplash.com/photo-1494112142672-801c71472ba5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus mollitia, reprehenderit nostrum porro quasi libero placeat aliquam, rerum a ipsum dicta, itaque ut consectetur necessitatibus est inventore deserunt sunt animi quo! Perferendis consequatur nesciunt error, perspiciatis ipsum, ipsam in, tempora saepe minus amet quasi ratione autem sed, explicabo assumenda repudiandae."
	},
	{
		name: "Canyon Floor",
		image: "https://images.unsplash.com/photo-1564577160324-112d603f750f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus mollitia, reprehenderit nostrum porro quasi libero placeat aliquam, rerum a ipsum dicta, itaque ut consectetur necessitatibus est inventore deserunt sunt animi quo! Perferendis consequatur nesciunt error, perspiciatis ipsum, ipsam in, tempora saepe minus amet quasi ratione autem sed, explicabo assumenda repudiandae."
	},
]

function seedDB(){
	// Remove all campgrounds
	Campground.remove({}, function(err){
		if(err){
			console.log(err)
		}
		console.log("removed campgrounds!")
		// add a few campgrounds
		data.forEach(function(seed){
			Campground.create(seed, function(err, campground){
				if(err){
					console.log(err)
				} else {
					console.log("added a campground");
					// create a comment
					Comment.create(
						{
							text: "This place is great, but I wish there was internet",
							author: "Homer"
					}, function(err, comment){
						if(err){
							console.log(err);
						} else {
							campground.comments.push(comment);
							campground.save();
							console.log("Created new comment")
						}
					})
				}
			});
		});
	});
	
	// add a few comments
};

module.exports = seedDB;