// Express initialises 'app' to be a function handler
// that you can supply to an HTTP server
var app = require('express')();
var http = require('http').Server(app)
var io = require('socket.io')(http);

// Define a route handler
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// Listen on the connection event for incoming sockets
io.on('connection', function(socket){
  console.log('a user connected');
});

// Make the HTTP server listen on port 3000
http.listen(3000, function(){
  console.log('listening on *:3000');
});