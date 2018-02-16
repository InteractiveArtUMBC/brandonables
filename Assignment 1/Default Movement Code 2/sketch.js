

function setup() {
    createCanvas(600,400);
    frameRate(100);
    

  
 
  }
  
  function draw() {
    squares(10,10);
    squares(30,30);
    squares(100,100);
    circles(50,50);
    triangles(100,100);
    traingles(200,200);
    
   

  }

  function squares(x,y){
    translate(x,y);
    push();
    fill(200,100,0);
    rect(100,200,10,10);
    rect(100,100,10,10);
    pop();

  }

  function circles(x,y){
  translate(x,y);
  push();
  fill(200,100,0);
  ellipse(100,200,10,10);
  ellipse(100,100,10,10);
  ellipse(600,300,10,10);
  ellipse(700,400,10,10);
  pop();

}

function triangles(x,y){
  translate(x,y);
  push();
  fill(0,255,0);
  triangle(30, 75, 58, 20, 86, 75);
  triangle(30, 75, 68, 30, 96, 85);
  triangle(30, 75, 78, 40, 106, 95);
  pop();

}

