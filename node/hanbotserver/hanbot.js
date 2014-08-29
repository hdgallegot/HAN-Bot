var b = require('bonescript');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var in1 = 'P8_9';
var in2 = 'P8_10';
var in3 = 'P8_15';
var in4 = 'P8_16';
var enA = 'P8_13';
var enB = 'P8_19';

b.pinMode(in1, b.OUTPUT);
b.pinMode(in2, b.OUTPUT);
b.pinMode(in3, b.OUTPUT);
b.pinMode(in4, b.OUTPUT);

var state = 0;

app.get('/', function(req, res){
  res.sendfile('myindex.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    compareData(msg);
  });
});

http.listen(4000, function(){
  console.log('listening on *:4000');
});

function moveForward(value){
	b.digitalWrite(in1, b.LOW);
	b.digitalWrite(in2, b.HIGH);
	b.analogWrite(enA, value);
	b.digitalWrite(in3, b.LOW);
	b.digitalWrite(in4, b.HIGH);
	b.analogWrite(enB, value);
}

function moveBack(value){
	b.digitalWrite(in1, b.HIGH);
	b.digitalWrite(in2, b.LOW);
	b.analogWrite(enA, value);
	b.digitalWrite(in3, b.HIGH);
	b.digitalWrite(in4, b.LOW);
	b.analogWrite(enB, value);
}

function moveClock(value){
	b.digitalWrite(in1, b.LOW);
	b.digitalWrite(in2, b.HIGH);
	b.analogWrite(enA, value);
	b.digitalWrite(in3, b.HIGH);
	b.digitalWrite(in4, b.LOW);
	b.analogWrite(enB, value);
}

function moveUnclock(value){
	b.digitalWrite(in1, b.HIGH);
	b.digitalWrite(in2, b.LOW);
	b.analogWrite(enA, value);
	b.digitalWrite(in3, b.LOW);
	b.digitalWrite(in4, b.HIGH);
	b.analogWrite(enB, value);
}

function compareData(data){
	if(data == "m") {
		moveForward(0.8);
	}else if(data == "b"){
		moveBack(0.8)
	}else if(data == "c"){
		moveClock(0.8);
	}else if(data == "u"){
		moveUnclock(0.8);
	}else{
		moveForward(0);
	}
}
