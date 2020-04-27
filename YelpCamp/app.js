var express					= require("express"),
		app							= express(),
		flash						=	require("connect-flash");
		bodyParser			= require("body-parser"),
		mongoose				= require("mongoose"),
		passport				= require("passport"),
		LocalStrategy		= require("passport-local"),
		Campground  		= require("./models/campground"),
		Comment					= require("./models/comment"),
		User						= require("./models/user"),
		seedDB					= require("./seeds"),
		methodOverride	= require("method-override");

// requiring routes
var commentRoutes			= require("./routes/comments"),
		campgroundRoutes	= require("./routes/campgrounds"),
		indexRoutes				= require("./routes/index");

var url = process.env.DATABASEURL || "mongodb://localhost/yelp_camp";
console.log(url);

mongoose.set('useUnifiedTopology', true);
mongoose.connect(url, { useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB(); //seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
	secret: "I love extraterrestrial beings",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// added to every template and every route
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});

app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

var port = process.env.PORT || 3000;
app.listen(port, function () {
});