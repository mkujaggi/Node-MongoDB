var collections=["Longiin"];
var mongojs = require('mongojs');
var databaseUrl = "mongodb://localhost:27017/mydb";
var db=mongojs(databaseUrl,collections);

function authenticateUser(username,email,response) {
	db.Longiin.find({"name":username,"email":email}, function(err, Longiin) {
	console.log(Longiin);
	console.log("hello");
  	if( err || !Longiin) {
   		response.write("..Not authorized user");
   		response.end();
  	}
  	else if(Longiin.length==0)  {
  		response.write("Not authorized user");
  	response.end();
 	 }
  	else{
    		response.write("Authorized user");
 		response.end();
	}
	});
}

module.exports.authenticateUser=authenticateUser;