var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.send("this will be the landing page soon");
});

app.get("/campgrounds", function(req, res){
	var campgrounds = [
		{name: "Zions", image: "https://utah.com/zion-national-park"},
		{name: "Yosemite", image: "https://www.npca.org/parks/yosemite-national-park"},
		{name: "Moab", image: "https://www.tripadvisor.com/Attractions-g143057-Activities-Zion_National_Park_Utah.html"},
	]

	res.render("campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("The Campout Server Has Started!")
});