var faceWidth = 100;
var faceHeight = 150;
var eyeSize = 20;
var x = 150;
var y = 150;
var auga1haed = 30;
var auga1breidd = 30;
var x1 = 130;
var y1 = 130;


function setup(){
  createCanvas (300,300);
}

function draw(){
  background(180);
  ellipse(x, y, faceWidth, faceHeight);
  fill(255)
  ellipse(x, y, auga1haed, auga1breidd);

  //.....kóði sem staðsetur augun m.v. x, y, faceWidth og faceHeight ætti að koma hér.

}

function mousePressed(){
  //Í hvert sinn sem músinni er smellt fá breyturnar ný gildi.
  faceWidth  = random(75,  150);
  faceHeight = random(100, 200);
  auga1haed = random(20, 30);
  auga1breidd = random(20, 30);
  eyeSize    = random(10,  30);

}
