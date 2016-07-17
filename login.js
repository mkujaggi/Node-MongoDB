var MongoClient = require('mongodb').MongoClient;
var url=require('url');
var collections=["Longiin"];
var querystring=require('querystring');
var http=require('http');
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var router=require("./Module.js");
http.createServer(function(request, response) {

if (request.url === '/favicon.ico') {
        response.writeHead(200, {'Content-Type': 'image/x-icon'} );
        response.end();
    } else {
      
	var query=url.parse(request.url).query;
	var name=querystring.parse(query)["username"];
	var email=querystring.parse(query)["email"];
	console.log(name+" "+email);
	router.authenticateUser(name,email,response) 
	}
}).listen(3000); 
console.log("Server started");