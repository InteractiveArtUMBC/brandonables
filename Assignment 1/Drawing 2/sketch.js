function setup() {
    createCanvas(1500, 740);
  
  }
  
  function draw() {
    line(30, 20, 1000, 75);
    line(40, 20, 1000, 200);
    line(50, 20, 1000, 400);
    line(60, 20, 1000, 600);
    line(70, 20, 1000, 800);
    line(80, 20, 1000, 900);
    line(90, 20, 1000, 1000);
        line(130, 120, 1000, 75);
        line(830, 20, 1000, 75);
        line(40, 820, 1000, 200);
        line(850, 20, 1000, 400);
        line(60, 820, 1000, 600);
        line(870, 20, 1000, 800);
        line(80, 820, 1000, 900);
        line(890, 20, 1000, 1000);
            line(130, 120, 1000, 75);
    line(410, 120, 1000, 200);
    line(510, 210, 1000, 400);
    line(160, 120, 1000, 600);
    line(701, 201, 1000, 800);
    line(810, 210, 1000, 900);
    line(910, 210, 1000, 1000);
    quad(38, 131, 86, 120, 69, 163, 30, 176);
    quad(38, 231, 86, 220, 69, 263, 30, 276);
    quad(38, 331, 86, 320, 69, 363, 30, 376);
    quad(38, 131, 200, 120, 69, 163, 30, 176);
    quad(38, 231, 300, 220, 69, 263, 30, 276);
    quad(38, 331, 400, 320, 69, 363, 30, 376);
    quad(138, 431, 186, 420, 169, 463, 130, 476);
    quad(238, 531, 286, 520, 269, 563, 230, 576);
    quad(338, 631, 386, 620, 369, 663, 330, 676);
    quad(138, 431, 586, 420, 169, 463, 130, 476);
    quad(238, 531, 586, 520, 269, 563, 230, 576);
    quad(338, 631, 586, 620, 369, 663, 330, 676);
    if (mouseIsPressed) {
      strokeWeight(4);
      fill(255,255,0);
    } else {
      fill(255);
    }
    point(mouseX, mouseY, 500, 500);
    
  }