var stepSize = 10

function setup() {
  createCanvas(400,400);
  background(255, 215, 0);
  fill(0);
  colorMode(HSB);
  frameRate(5);
}

function draw(){
  fill(random(0,360),75,100);
  for(var i = 0; i < 21 ; i = i + 1) {
      for(var a = 0; a < 21 ; a = a + 1) {
    ellipse(10 + a*20, 10 + i*20, 15, 15);
      }
  }
}
