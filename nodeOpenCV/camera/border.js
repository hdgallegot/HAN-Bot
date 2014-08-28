var cv = require('opencv');

var camera = new cv.VideoCapture(1);
camera.setWidth(160);
camera.setHeight(90);

var lowThresh = 0;
var highThresh = 100;
var nIters = 2;

var namedwindow = new cv.NamedWindow('Display');

setInterval(function() {

	camera.read(function(err, im) {

	im.convertGrayscale();
	im_canny = im.copy();

	im_canny.canny(lowThresh, highThresh);
//	im_canny.dilate(nIters);

        namedwindow.show(im_canny);
        namedwindow.blockingWaitKey(0,1);
	});

}, 200);
