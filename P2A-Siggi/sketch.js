var faceWidth = 100;
var faceHeight = 150;
var eyeSize = 20;
var x = 150;
var y = 150;
var nefHeight = 30;
var nefWidth = 30;


function setup(){
  createCanvas (300,300);
}

function draw(){
  background(180);
  ellipse(x, y, faceWidth, faceHeight);
  fill(255)
  ellipse(x, y, nefHeight, nefWidth);

  //.....kóði sem staðsetur augun m.v. x, y, faceWidth og faceHeight ætti að koma hér.

}

function mousePressed(){
  //Í hvert sinn sem músinni er smellt fá breyturnar ný gildi.
  faceWidth  = random(75,  150);
  faceHeight = random(100, 200);
  nefHeight = random(20, 30);
  nefWidth = random(20, 30);
  eyeSize    = random(10,  30);

}
