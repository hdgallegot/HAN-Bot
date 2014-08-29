var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('myindex.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log(msg);
  });
});

http.listen(4000, function(){
  console.log('listening on *:4000');
});
