var express = require("express");
var app = express();

app.get("/", function(req, res){
		res.send("Hi there, welcome to my assignment!");
});
app.get("/speak/:animal", function(req, res){
	param = req.params.animal;
	if(param === "pig"){
		res.send("The pig says 'Oink!'");
	} else if(param === "cow"){
	res.send("The cow says 'Moo!'");
	} else if(param === "dog"){
	res.send("The dog says 'Woof Woof!'");
	} else if(param === "crow"){
	res.send("The crow says 'For Castle Black!'");
	}
});

//////

app.get("/repeat/:word/:num", function(req, res){
	var word = req.params.word;
	var num = Number(req.params.num);
	var string = "";
	for(var i = 0; i < num; i++){
		string += word + " ";
	}
	res.send(string);
});

app.get("*", function(req, res){
		res.send("Somewhere else!");
});



app.listen(3000);
