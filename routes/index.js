/*
 * GET home page.
 */

var database = require('./database');

exports.index = function(req, res){
	database.currentUser += 1;
	res.render('index', { title: 'SpeedCoder'});
};

exports.racer = function(req, res){
	database.currentUser += 1;
	if(database.currentUser > 2)
		database.currentUser = 2;
	res.render('race', { title: 'SpeedCoder', question: database.questions[0], questionID: 0, userID: (database.currentUser-1)});
};
