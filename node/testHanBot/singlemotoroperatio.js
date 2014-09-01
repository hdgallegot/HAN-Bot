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

switch (Number(process.argv[2])){
	case 0:
		moveForward(0);
		break;
	case 1:
		moveForward(Number(process.argv[3]));
		break;
	case 2:
		moveBack(Number(process.argv[3]));
		break;
	case 3:
		moveUnclock(Number(process.argv[3]));
		break;
	case 4:
		moveClock(Number(process.argv[3]));
		break;
    case 5:
        stepClock(Number(process.argv[3]), Number(process.argv[4]));
        break;
}

//moveForward(Number(process.argv[2]));

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

function stepClock(value,time){
    moveClock(value);
    sleep(time);
}

function sleep(millisecond){
    var currentTime = new Date().getTime();
    console.log(currentTime);
    while(currentTime + millisecond >= new Date().getTime()){
        //do nothing
    }
    console.log(new Date().getTime());
}

function compareData(data){
	if(data == "hola") {
		console.log('correcto');
	}
}
