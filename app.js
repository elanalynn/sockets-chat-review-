var express = require('express');
var app = express();
// TODO: create http server
// TODO: set up socket server

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, reqs){
  res.render('index', {title: 'Socket Review'});
});

// TODO: bind http server
// TODO: io stuff
