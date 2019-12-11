/* BlackJack server.js
 * Matthew + Cam + Jack
*/


var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var data = require('./scoreData');



var app = express();
var port = process.env.PORT || 4221;

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

app.get('/rules', function(req,res, next){
    console.log("This is the rules");
    res.status(200).render('rules');
});



app.get('/leaderboard/:n', function(req,res, next){
    var n = req.params.n;
    console.log("== Requesting single player");
      var singlepost = data[n];
      res.status(200).render('leaderboard',  {
          display: true,
          singlepost: singlepost
      });

});

app.get('/play' , function(req,res,next){
      console.log("==Requesting to play the game");
      res.status(200).render('play');

});


app.get('*', function(req, res){
    console.log("== This is not the request you need");
    res.status(200).render('404');

});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
