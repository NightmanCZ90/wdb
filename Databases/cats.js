var mongoose = require("mongoose");
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true});

// creating a DB schema structure

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB

// var george = new Cat({
// 	name: "Mrs. Norris",
// 	age: 27,
// 	temperament: "Evil"
// });

// george.save(function(err, cat){
// 	if(err){
// 		console.log("Something went wrong")
// 	} else {
// 		console.log("We just saved a cat to the db")
// 		console.log(cat);
// 	}
// });

// Cat.create({
// 	name: "Snow White",
// 	age: 15,
// 	temperament: "Bland"
// }, function(err, cat){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(cat);
// 	}
// });

// retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
	if(err){
		console.log("OH NO, ERROR!");
		console.log(err);
	} else {
		console.log("All the cats...");
		console.log(cats);
	}
});

