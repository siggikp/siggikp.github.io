var stepSize = 10

function setup() {
  createCanvas(400,400);
  background(255, 215, 0);
  fill(0);
  colorMode(HSB);
  frameRate(30);
}

function draw(){
  for(var i = 0; i < random(1, 21) ; i = i + 1) {
    fill(random(0,360),75,100);
    for(var a = 0; a < random(1, 21) ; a = a + 1) {
      ellipse(10 + i*20, 10 + a*20, 15, 15);
    }
  }
}
