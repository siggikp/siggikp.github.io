function setup() {
  createCanvas(200,300);
  background(255, 215, 0);
  fill(0);
  colorMode(HSB);
  frameRate(5);
}

function draw(){
  fill(random(0,360),75,100);
  for(var i = 0; i < 5 ; i = i + 1) {
    ellipse(100, 50 + i*20, 15, 15);
  }
}
