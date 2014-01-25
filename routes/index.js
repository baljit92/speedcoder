/*
 * GET home page.
 */

var database = require('./database');

exports.index = function(req, res){
	database.currentUser += 1;
	res.render('index', { title: 'Express', question: database.questions[0], questionID: 0, userID: (database.currentUser-1)});
};