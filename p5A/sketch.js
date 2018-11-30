var x = 0;
var y = 0;
var xSpeed = 8;
var ySpeed = 4;
var hreyf = 0;
var spadibreidd = 100;
var spadiY = 400

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255,200,0);
  fill(236,36,94);
  rect(hreyf, spadiY, spadibreidd, 30);
  fill(236,36,94);
  ellipse(x, y, 30, 30);
  x = x + xSpeed;
  y = y +ySpeed;
  if ((x > width) || (x < 0)) {
    xSpeed = xSpeed * -1;
  }
  hreyf = mouseX
  if (hreyf > width - spadibreidd/2) {
    hreyf = width - spadibreidd/2;
  }
  if ((y > height) || (y < 0)) {
    ySpeed = ySpeed * -1;
  }
  spadibreidd = 100
  spadiY = 400
  hreyf = mouseX
  if(abs(spadiY - y) < 30/2 + 30/2 && abs(hreyf - x) < 30/2 + 30/2){
  ySpeed = ySpeed * -1;
  }
}
