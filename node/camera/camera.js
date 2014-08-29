var cv = require('opencv');

var camera = new cv.VideoCapture(0);
//for logitech 920HD
//camera.setWidth(160);
//camera.setHeight(90);
//for local camera pc
camera.setWidth(180);
camera.setHeight(120);
//add window
var namedwindow = new cv.NamedWindow('Display');

var lower_threshold = [0, 162, 217];
var upper_threshold = [140, 255, 255];
var GREEN = [0, 255, 0]; //B, G, R
var RED   = [0, 0, 255]; //B, G, R

setInterval(function() {
	camera.read(function(err, im) {
	img_hsv = im.copy();
	img_hsv.inRange(lower_threshold, upper_threshold);
	img_hsv.erode(3);
	img_hsv.dilate(3);

	var all = new cv.Matrix(im.height(), im.width());
	    contours = img_hsv.findContours();
	    var cgx = 0;
            var cgy = 0;
	    for(i = 0; i < contours.size(); i++){
		var moments = contours.moments(i);
		console.log(contours.area(i));
		cgx = Math.round(moments.m10/moments.m00);
		cgy = Math.round(moments.m01/moments.m00);
		all.drawContour(contours, i, GREEN);
		im.line([cgx - 5, cgy], [cgx + 5, cgy], RED);
		im.line([cgx, cgy - 5], [cgx, cgy + 5], RED);
	}

//		im.save('cam.png');
        namedwindow.show(im);
        namedwindow.blockingWaitKey(0,1);
//        console.log('captured');
	    console.log("x: " + cgx);
//	    console.log("y: " + cgy);
//	    console.log();
	});

}, 200);
