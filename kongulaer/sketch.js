var spiders = [];

function setup() {
  createCanvas(displayWidth, displayHeight)
  for (var i = 0; i < 100; i++){
    spiders.push(new spider(random(100, 900),random(100,900)));
  }
}
function draw() {
  background(255,200,0);

  for (var i = 0; i < spiders.length; i++){
    spiders[i].move();
    spiders[i].show();
  }
}
class spider {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.stefna = random(0, 1);
    this.speed = 5;
  }
  move() {
    this.stefna = this.stefna + random(-0.1, 0.1);
    this.x = this.x + this.speed*cos(this.stefna*2*PI);
    this.y = this.y + this.speed*sin(this.stefna*2*PI);
    if (this.x > width) {
      this.stefna = 0.5
    }
    if (this.x < 0) {
      this.stefna = 0
    }
    if(this.y > height){
      this.stefna = 0.75
    }
    if(this.y < 0){
      this.stefna = 0.25
    }
  }

  show(){
    fill (0);
    ellipse(this.x, this.y, 20, 20);
    line(this.x, this.y, this.x + 20, this.y + 20);
    line(this.x, this.y, this.x + 30, this.y);
    line(this.x, this.y, this.x + 20, this.y - 20);
    line(this.x, this.y, this.x - 20, this.y + 20);
    line(this.x, this.y, this.x - 30, this.y);
    line(this.x, this.y, this.x - 20, this.y - 20);
  }

}
