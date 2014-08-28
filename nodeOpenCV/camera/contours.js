var cv = require('opencv');

var camera = new cv.VideoCapture(1);
//camera.setWidth(160);
//camera.setHeight(90);

var namedwindow = new cv.NamedWindow('Display');

var lower_threshold = [59, 113, 138];
var upper_threshold = [124, 201, 203];
var GREEN = [0, 255, 0]; //B, G, R
var RED   = [0, 0, 255]; //B, G, R

setInterval(function(){
	camera.read(function(err, im){
	    img_hsv = im.copy()
//	    im.save('./cam.png');
	    img_hsv.inRange(lower_threshold, upper_threshold);
//	    img_hsv.save('./detected.jpg');
	    img_hsv.dilate();
	    img_hsv.erode();

	    var all = new cv.Matrix(im.height(), im.width());
	    contours = img_hsv.findContours();
	    var cgx = 0;
            var cgy = 0;
	    for(i = 0; i < contours.size(); i++){
		var moments = contours.moments(i);
		cgx = Math.round(moments.m10/moments.m00);
		cgy = Math.round(moments.m01/moments.m00);
		all.drawContour(contours, i, GREEN);
		all.line([cgx - 5, cgy], [cgx + 5, cgy], RED);
		all.line([cgx, cgy - 5], [cgx, cgy + 5], RED);
	    }

//	    all.save('./all.png');

        namedwindow.show(all);
        namedwindow.blockingWaitKey(0,1);

//	    console.log("x: " + cgx);
//	    console.log("y: " + cgy);
//	    console.log();
	});
}, 300);
