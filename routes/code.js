var database = require('./database');

exports.addCode = function(req, res){
	var code = req.param("code");
	var userID = req.param("userID");

	database.codeSnippets[userID] = code;

	res.send("Success!")
}

exports.getCode = function(req, res){
	var userID = req.param("userID");

	console.log("Request from " + userID + " " + database.gameWinner);

	if(userID == 0)
		res.send({code:database.codeSnippets[1], winner:database.gameWinner});
	if(userID == 1)
		res.send({code:database.codeSnippets[0], winner:database.gameWinner});
}