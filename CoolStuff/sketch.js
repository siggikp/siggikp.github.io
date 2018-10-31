function setup(){
  createCanvas(300, 300);
  for(var i = 0; i < 5; i = i + 1); {
    text(""+i, width/2, 20+i*10);
  }
}
