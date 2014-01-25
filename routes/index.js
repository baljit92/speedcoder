/*
 * GET home page.
 */

var database = require('./database');

exports.index = function(req, res){
  res.render('index', { title: 'Express', question: database.questions[0], questionID: 0});
};