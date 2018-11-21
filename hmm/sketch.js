class bubbi {
  constructor(a, b, x, y){
    this.a = a
    this.b = b
    this.x = x
    this.y = y
  }

  var k = 150
  var d = 13
  var j = 28

  function setup() {
    createCanvas(400,400)
  }
  function draw(){
    kall(50, 70, mouseX, mouseY)
  }
  show(){
    function kall(a, b, x, y){
      background(255, 0, 0)
      fill(192,192,192)
      rect(x, y, a, b)
      //+8 -42
      rect(x + 8, y - 42, 37, 42)
      //+10 +10
      rect(x + 10, y + 10, a/2, b/2)
      fill(255, 255, 255)
      //+11 +13
      rect(x + 11, y + d, a/2.5, b/10)
      fill(255, 0, 0)
      //+ 20, +28
      ellipse(x + 20, y + j, 20, 12)
      //             +0 +130
      line(x, y, x, y + 130)
      //  + 50       +50, +90
      line(x + 50, y, x + 50, y + k )
      //            -28   -40
      line(x, y, x - 28, y - 40)
      //   +50      +90  +28
      line(x + 50, y, x + 90, y+28)
      fill(0, 128, 0)
      //       +15 -14   +37  -14 +26   -6
      triangle(x+12, y-13, x+60, y-14, x+4, y-6)
      //      +14  -30
      ellipse(x+14, y-30, 10, 10)
      //       +40  -30
      ellipse(x+40, y-30, 10, 10)
    }
    function mousePressed(){
      k = random(80, 200)
      d = random(8, 15)
      j = random(20, 35)
    }


  }
