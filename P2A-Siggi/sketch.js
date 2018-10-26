var faceWidth = 100;
var faceHeight = 150;
var eyeSize = 20;
var x = 150;
var y = 150;
var augHeight = 40;
var augWidth = 40;
var aug2Width = 40;
var aug2Height = 40;
var depill = 20;
var depill1 = 20;
var depill2 = 20;
var depill3 = 20;
var munnur1 = 126;
var munnur2 = 182;
var munnur3 = 170;
var munnur4 = 182;
var munnur5 = 148;
var munnur6 = 196;


function setup(){
  createCanvas (300,300);
}

function draw(){
  background(180);
  fill(255, 244, 165)
  ellipse(x, y, faceWidth, faceHeight);
  fill(255)
  triangle(munnur1, munnur2, munnur3, munnur4, 148,196)
  ellipse(130, 120, augHeight, augWidth);
  ellipse (180, 120, aug2Width, aug2Height);
  fill(147, 255, 244)
  ellipse (135, 125, depill, depill1);
  ellipse (185, 125, depill2, depill3);
  fill(255, 244, 165)
  arc(150, 150, 50, 60, 90, PI + QUARTER_PI, OPEN);

  //.....kóði sem staðsetur augun m.v. x, y, faceWidth og faceHeight ætti að koma hér.

}

function mousePressed(){
  //Í hvert sinn sem músinni er smellt fá breyturnar ný gildi.
  munnur1 = random(115, 130)
  munnur3 = random(165, 175)
  munnur5 = random(143, 155)
  munnur6 = random(190, 200)
  faceWidth  = random(75,  150);
  faceHeight = random(100, 200);
  eyeSize    = random(10,  30);
  augHeight = random(30, 50);
  augWidth = random(30, 50);
  aug2Height = random(30, 50);
  aug2Width = random(30, 50);
  depill = random(10, 30);
  depill2 = random(10, 30);
  depill3 = random(10, 30);


}
