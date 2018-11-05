var stepSize = 10

function setup() {
  createCanvas(400,400);
  background(255, 215, 0);
  fill(0);
  colorMode(HSB);
  frameRate(15);
}

function draw(){
  background(255, 215, 0);
  for(var i = 0; i < 21 ; i = i + 1) {
    fill(random(0,360),75,100);
    for(var a = 0; a < random(1, 21) ; a = a + 1) {
      ellipse(10 + i*20, 10 + a*20, 15, 15);
        for(var d = 0; d < 21 ; d = d + 1) {
      rect(0 + i*20, 0 + d, 20, 20)
      }
    }
  }
}
