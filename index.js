// Express initialises 'app' to be a function handler
// that you can supply to an HTTP server
var app = require('express')();
var http = require('http').Server(app)

// Define a route handler
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// Make the HTTP server listen on port 3000
http.listen(3000, function(){
  console.log('listening on *:3000');
});