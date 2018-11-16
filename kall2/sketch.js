function setup() {
  createCanvas(400,400)
}
function draw(){
  kall(50, 70)
}
function kall(a, b){
  fill(192,192,192)
  rect(170, 150, a, b)
  rect(178, 108, 37, 42)
  rect(180, 160, a/2, b/2)
  fill(255, 255, 255)
  rect(181, 163, a/2.5, b/10)
  fill(255, 0, 0)
  ellipse(190, 178, 20, 12)
  line(170, 150, 170, 280 )
  line(220, 150, 220, 280)
  line(170, 150, 142, 110)
  line(220, 150, 260, 178)

}
