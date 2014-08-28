var http = require("http");
var fs = require('fs');
var cv = require('opencv');
var socketio = require('socket.io');
var concat = require('concat-stream');

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream('index.html').pipe(res);
});

var io = socketio.listen(server);
server.listen(3000, '128.0.0.1');

//camera settings opencv
var camera = new cv.VideoCapture(0);
camera.setWidth(240);
camera.setHeight(180);

io.sockets.on('connection', function (socket){

  camera.read(function loop(err, im) {
      //save image
      im.save('cam.png');
      //in this line we use the image stream
      fs.readFile('cam.png','base64', function(err, image){
        var write = concat(function(data){
            var str = data.toString('base64');
            socket.emit('image',str);
            setTimeout(function(){
                camera.read(loop);
            }, 100);
        });
        image.pipe(write);
      });

  });

});


