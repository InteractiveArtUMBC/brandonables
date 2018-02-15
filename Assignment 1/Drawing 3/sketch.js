function setup() {
    createCanvas(1500, 740);
    background(700);
    

  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(255,255,0);
    } else {
      fill(255);
    }
    arc(250, 155, 450, 450, 0, HALF_PI);// Good practice of using arcs in this whole example. They can be confusing to understand. 
    arc(250, 155, 460, 460, HALF_PI, PI);
    arc(250, 155, 470, 470, PI, PI + QUARTER_PI);
    arc(900, 250, 450, 470, 0, HALF_PI);
    arc(900, 250, 460, 460, HALF_PI, PI);
    arc(900, 250, 470, 450, PI, PI + QUARTER_PI);
    noFill();
    arc(50, 55, 60, 60, HALF_PI, PI);
    arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
    arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
    arc(1150, 1155, 1150, 1150, 110, HALF_PI);
    arc(250, 255, 280, 280, PI + QUARTER_PI, TWO_PI);
    arc(450, 455, 470, 470, PI, PI + QUARTER_PI);
    arc(650, 655, 660, 660, HALF_PI, PI);
    arc(350, 350, 380, 380, 0, PI + QUARTER_PI, CHORD);
    arc(1000,500,300,600,185,340,[PIE])
    arc(950,500,300,600,185,340,[PIE])
    arc(850,500,300,600,185,340,[PIE])
    arc(750,500,300,600,185,340,[PIE])
    arc(650,500,300,600,185,340,[PIE])
    arc(550,500,300,600,185,340,[PIE])
    arc(450,500,300,600,185,340,[PIE])
    arc(350,500,300,600,185,340,[PIE])
    arc(250,500,300,600,185,340,[PIE])
    arc(150,500,300,600,185,340,[PIE])
    arc(1000,1000,300,600,185,340,[PIE])
    arc(950,900,300,600,185,340,[PIE])
    arc(850,800,300,600,185,340,[PIE])
    arc(750,700,300,600,185,340,[PIE])
    arc(650,600,300,600,185,340,[PIE])
    arc(550,500,300,600,185,340,[PIE])
    arc(450,400,300,600,185,340,[PIE])
    arc(350,300,300,600,185,340,[PIE])

    ellipse(mouseX, mouseY, 80, 80);
    
  }
