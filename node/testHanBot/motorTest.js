var b = require('bonescript');

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

//setInterval(operation, 1000);

function operation(){
	state = state ? 0 : 1;

	b.digitalWrite(in1, state);
	b.digitalWrite(in2, state);
	b.digitalWrite(in3, state);
	b.digitalWrite(in4, state);
}

moveBack();
b.analogWrite(enB, 0.5);

function moveForward(){
	b.digitalWrite(in1, b.LOW);
	b.digitalWrite(in2, b.HIGH);
	b.digitalWrite(in3, b.HIGH);
	b.digitalWrite(in4, b.LOW);
}

function moveBack(){
	b.digitalWrite(in1, b.HIGH);
	b.digitalWrite(in2, b.LOW);
	b.digitalWrite(in3, b.LOW);
	b.digitalWrite(in4, b.HIGH);
}
