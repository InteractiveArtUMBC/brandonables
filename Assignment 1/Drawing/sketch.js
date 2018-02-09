function setup() {
    createCanvas(1500, 740);
    background(200);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(255,0,0);
    } else {
      fill(255);
    }
    rect(mouseX, mouseY, 80, 80);
    
  }