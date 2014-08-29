var cv = require('opencv');

var camera = new cv.VideoCapture(0);
camera.setWidth(1080);
camera.setHeight(920);
//setInterval(function() {

	camera.read(function(err, im) {
		im.save('cam.png');
	});

//}, 1000);
