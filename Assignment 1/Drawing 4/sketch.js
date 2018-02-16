function setup() {
    createCanvas(1500, 740);
    background(100,100,200);
  }
  
  var value = 0;
  function draw() {
    fill(value);//Nice use of functions to change color.
    rect(25, 25, 50, 50);
    rect(125, 125, 150, 150);// I wonder if you could make this code smaller? My create one rect() but give a different values
    rect(325, 325, 350, 350);
    rect(725, 125, 150, 150);
    rect(925, 25, 50, 50);
    ellipse(125, 50, 55, 55);
    ellipse(225, 50, 55, 55);
    ellipse(325, 50, 55, 55);
    ellipse(425, 50, 55, 55);
    ellipse(525, 50, 55, 55);
    ellipse(625, 50, 55, 55);
    ellipse(725, 50, 55, 55);
    ellipse(825, 50, 55, 55);
    ellipse(890, 50, 55, 55);
    triangle(350, 100, 500, 500, 300, 75);
    triangle(650, 100, 500, 500, 700, 75);

  }
  function mouseMoved() {
    value = value + 5;
    if (value > 255) {
      value = 0;
    }
  }
