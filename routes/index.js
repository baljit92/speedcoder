/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', question: 'Find the largest prime number', questionID: 1});
};