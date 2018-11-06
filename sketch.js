var yoff = 0; //second dimension time

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(64,61,80);
	translate(width / 2, height / 2);
  //rotate(PI / 2);

  stroke(255);
  fill(	221,241,232);
  strokeWeight(1);

/*delta angle
each side of the bfly points
this is the incrementation*/
var da = PI / 200;
var dx = 0.05; //decrement

var xoff = 0;
beginShape();
for (var a = 0; a <= TWO_PI; a += da) { //increment a - make angle biggar
  	//perlin noise
  	//the last previous number simlar to the number chosen.
  	var n = noise(xoff, yoff);
  	var r = sin(2 * a) * map(n, 0, 1, 50, 300);
  	var x = sin(frameCount/100)* r * cos(a);
  	//framecount function makes the butterfly flap in and out
  	var y = r * sin(a);
  	if (a < PI){ //if angle is less than PI
  		xoff += dx;  //decrement
  	} else{
  		xoff -= dx; //decrement time
  	}
    //point(x, y);
    vertex(x, y);
  }
  endShape();

yoff += 0.01;  //values changing over time
}
