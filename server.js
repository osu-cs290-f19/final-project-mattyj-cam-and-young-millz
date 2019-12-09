/* BlackJack server.js
 * Matthew + Cam + Jack
*/


var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var data = require('./postData');

var app = express();
var port = process.env.PORT || 4200;

//app.engine('handlebars', exphbs({ defaultLayout: 'main'}));

//exphbs.registerPartials(__dirname + '/views/partials');
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

//app.use(express.static('public'));

app.get('/', function(req, res, next){

});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
