function setup() {
  createCanvas(400,400);
  background(255, 215, 0);
  fill(0);
}
function draw(){
  if(mouseX < 200){
    ellipse(mouseX, mouseY, 30, 30);
  }
}
}
