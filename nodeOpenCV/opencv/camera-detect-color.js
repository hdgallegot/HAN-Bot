var cv = require('opencv');

var camera = new cv.VideoCapture(0);
var lower_threshold = [214, 224, 0];
var upper_threshold = [255, 255, 188];

camera.read(function(err, im){
    img_hsv = im.copy()
    im.save('./cam.png');
    img_hsv.inRange(lower_threshold, upper_threshold);
    img_hsv.save('./detected.jpg');
});
