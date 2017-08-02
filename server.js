const http = require("http");
const fs = require("fs");
const formidable = require("formidable");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const hostname = "127.0.0.1";
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



//Set static path

var person =[
{
	name: "Jeff",
	age: 30
},
{
	name: "bill",
	age: 4345
},

{
	name: "temmie",
	age: 19
}

]

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app
  .get( '/', function( req, res ) {
  	//res.json(person);
    res.sendFile( path.join( __dirname, "public", "HomePage.html" ));
    //res.render("index", {
    //	title:"Customers"
    //});
 });

  app.listen(port, function() {
  	console.log("running . . .");
  });

/*
fs.readFile("HomePage.html", (err, html) => {
	if(err) {
		throw err;
	}

	const server = http.createServer((req, res) => {
		res.writeHeader(200, {"Content-Type": "text/html"});
		res.write(html);
		res.end();
	}).listen(port);
});
*/