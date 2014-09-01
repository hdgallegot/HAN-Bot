var b = require('bonescript');
var led = "P8_18";

b.pinMode(led, 'out');

timer = setInterval(function(){
    on();
    setTimeout(function(){
        off();
    },500);
},1000);

function on(){
    b.digitalWrite(led,1);
}

function off(){
    b.digitalWrite(led,0);
}

stopTimer = function() {
    clearInterval(timer);
};

setTimeout(stopTimer, 10000);
