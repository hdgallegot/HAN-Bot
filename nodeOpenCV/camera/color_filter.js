var cv = require('opencv');

// (B)lue, (G)reen, (R)ed
var lower_threshold = [214, 224, 0];
var upper_threshold = [255, 255, 188];

cv.readImage('./cam.png', function(err, im) {

	im.inRange(lower_threshold, upper_threshold);
	im.save('./detected.jpg');

});
