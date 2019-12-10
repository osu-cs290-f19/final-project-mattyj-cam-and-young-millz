/* BlackJack server.js
 * Matthew + Cam + Jack
*/


var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var data = require('./scoreData');

var app = express();
var port = process.env.PORT || 4201;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function(req, res, next){
  console.log("== Requesting Root!");
  res.status(200).render('homepage');
});

app.get('/leaderboard', function(req, res, next){
  console.log("== Requesting LeaderBoard!");
  res.status(200).render('leaderboard', {
    scoreData: data
  });
});

app.get('/rules', function(req, res, next){
  console.log("== Requesting Rules!");
  //res.render('rules');
});
app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
