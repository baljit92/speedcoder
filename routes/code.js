var database = require('./database');


exports.addCode = function(req, res){
	var code = req.param("code");
	var userID = req.param("userID");

	database.codeSnippets[userID] = code;

	res.send("Success!")
}

exports.getCode = function(req, res){
	var userID = req.param("userID");

	if(userID == 0)
		res.send(database.codeSnippets[1]);
	if(userID == 1)
		res.send(database.codeSnippets[0]);
}