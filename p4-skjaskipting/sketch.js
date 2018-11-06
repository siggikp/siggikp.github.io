    function setup() {
      createCanvas(400,400);

      fill(0);
    }
    function draw(){
      background(255, 215, 0);
      if(mouseX < 200 && mouseY < 200){
        rect(0, 0, 200, 200);
    }
        if(mouseX > 200 && mouseY < 200){
          rect(200, 0, 200, 200);
        }
          if(mouseX > 200 && mouseY > 200){
           rect(200, 200, 200, 200);
          }
          if(mouseX < 200 && mouseY > 200){
           rect(0, 200, 200, 200);
          }
    }
