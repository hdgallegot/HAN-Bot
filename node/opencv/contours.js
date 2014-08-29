var cv = require('opencv');

var camera = new cv.VideoCapture(0);
var lower_threshold = [214, 224, 0];
var upper_threshold = [255, 255, 188];
var GREEN = [0, 255, 0]; //B, G, R
var RED   = [0, 0, 255]; //B, G, R

setInterval(function(){
	camera.read(function(err, im){
	    img_hsv = im.copy()
//	    im.save('./cam.png');
	    img_hsv.inRange(lower_threshold, upper_threshold);
//	    img_hsv.save('./detected.jpg');

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
	    console.log("x: " + cgx);
	    console.log("y: " + cgy);
	    console.log();
	});
}, 500);
