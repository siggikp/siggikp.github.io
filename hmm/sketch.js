
var man1, man2;

var k = 150
var d = 13
var j = 28

function setup() {
  createCanvas(1000,1000)
  man1 = new bubbi(50, 70, random(400, 600), random(400, 600))
  man2 = new bubbi(50, 70, random(400, 600), random(400, 600))

}
function mousePressed(){
  man1.k = random(80, 200)
  man2.k = random(80, 200)
  man1.d = random(8, 15)
  man2.d = random(8, 15)
  man1.j = random(20, 35)
  man2.j = random(20, 35)
}
function draw(){
  background(255, 0, 0)
  fill(255, 255, 0)
  ellipse(500, 500, 400, 400)
  man1.move()
  man1.show()
  man2.move()
  man2.show()
  print(man1.x);
}
class bubbi {
  constructor(a, b, x, y){
    this.a = a
    this.b = b
    this.x = x
    this.y = y
    this.k = k
    this.d = d
    this.j = j
  }
  move(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
    if (this.x > 1000) {
      this.x = this.x - 50
    }
    if (this.x < 0){
      this.x = this.x + 50
    }
    if (this.y < 0){
      this.y = this.y + 50
    }
    if(this.y > 1000){
      this.y = this.y - 50
    }
    if(this.x < PI*200*200){
      this.x = this.x + random(-20,20);
    }
  }
  show(){
    fill(192,192,192)
    rect(this.x, this.y, this.a, this.b)
    //+8 -42
    rect(this.x + 8, this.y - 42, 37, 42)
    //+10 +10
    rect(this.x + 10, this.y + 10, this.a/2, this.b/2)
    fill(255, 255, 255)
    //+11 +13
    rect(this.x + 11, this.y + this.d, this.a/2.5, this.b/10)
    fill(255, 0, 0)
    //+ 20, +28
    ellipse(this.x + 20, this.y + this.j, 20, 12)
    //             +0 +130
    line(this.x, this.y, this.x, this.y + 130)
    //  + 50       +50, +90
    line(this.x + 50, this.y, this.x + 50, this.y + this.k )
    //            -28   -40
    line(this.x, this.y, this.x - 28, this.y - 40)
    //   +50      +90  +28
    line(this.x + 50, this.y, this.x + 90, this.y+28)
    fill(0, 128, 0)
    //       +15 -14   +37  -14 +26   -6
    triangle(this.x+12, this.y-13, this.x+60, this.y-14, this.x+4, this.y-6)
    //      +14  -30
    ellipse(this.x+14, this.y-30, 10, 10)
    //       +40  -30
    ellipse(this.x+40, this.y-30, 10, 10)
  }



}
