var viti;

function preload() {
  viti = createImg('https://en.wikipedia.org/wiki/Political_compass#/media/File:Political_chart.svg');
}

function setup() {
  createCanvas(1200,1306);
  background(viti);
}

function draw() {
  ellipse (random(0,width),random(0,height),10,10);
}
