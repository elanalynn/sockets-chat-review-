var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server)


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index', {title: 'Socket Review'});
});

var port = process.env.PORT || 3000

server.listen(port, function() {
  console.log("Listening on localhost:3000");
})

io.on('connection', function (socket) {
  socket.on('chat message', function (message) {
    io.emit('chat message', message);
  })
})
