/*
* GET users listing.
*/
var execSync = require('execSync');
var fs = require('fs');
var database = require('./database');

exports.compiler = function(req, res){
	var code = req.param("code");
	var questionID = req.param("questionID");
	var userID = req.param("userID");

	console.log(code);

	var codeCleaned = code.replace(/\"/g,'\\\"');

	console.log("Cleaned:");
	
	fs.writeFileSync("code.py", code);
	
	// Compile and Run Code
	var output = '';
	output= execSync.exec('python code.py 2>&1'); // Redirecting stderr to stdout
	
	// Server side output
	console.log("Client Connected!\n");
	console.log(code);
	console.log(output);
	
	// Client side output
	console.log(output.stdout + " " + database.answers[questionID])
	if(output.stdout == database.answers[questionID])
	{
		database.gameWinner = userID;
		res.send("Correct");
	}
	else
		res.send("Incorrect");
};
