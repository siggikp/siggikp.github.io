var faceWidth = 100;
var faceHeight = 150;
var eyeSize = 20;
var x = 150;
var y = 150;
var nefHeight = 30;
var nefWidth = 30;
var augHeight = 40;
var augWidth = 40;
var aug2Width = 40;
var aug2Height = 40;
var depill = 20;
var depill1 = 20;
var depill2 = 20;
var depill3 = 20;
var munnur1 = 170;
var munnur2 = 182;

function setup(){
  createCanvas (300,300);
}

function draw(){
  background(180);
  fill(255, 244, 165)
  ellipse(x, y, faceWidth, faceHeight);
  fill(255)
  triangle(126, 182, munnur1, munnur2, 148,196)
  ellipse(x, y, nefHeight, nefWidth);
  ellipse(130, 120, augHeight, augWidth);
  ellipse (180, 120, aug2Width, aug2Height);
  fill(0)
  ellipse (135, 125, depill, depill1);
  ellipse (185, 125, depill2, depill3);

  //.....kóði sem staðsetur augun m.v. x, y, faceWidth og faceHeight ætti að koma hér.

}

function mousePressed(){
  //Í hvert sinn sem músinni er smellt fá breyturnar ný gildi.
  faceWidth  = random(75,  150);
  faceHeight = random(100, 200);
  nefHeight = random(20, 30);
  nefWidth = random(20, 30);
  eyeSize    = random(10,  30);
  augHeight = random(30, 50);
  augWidth = random(30, 50);
  aug2Height = random(30, 50);
  aug2Width = random(30, 50);
  depill = random(10, 30);
  depill2 = random(10, 30);
  depill3 = random(10, 30);


}
