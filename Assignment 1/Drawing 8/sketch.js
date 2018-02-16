function setup() {
    createCanvas(2000, 2000);
    background(255, 204, 0);
 
  }
  
  function draw() {
    
    fill(255, 255, 100);
    squares(100,500);
    squares(300,300);
      squares(500,500);
    squares(700,300);
    squares(500,100);
    squares(900,100);
    squares(900,100);
    squares(900,500);
    squares(1100,300);
    squares(1300,100);
    squares(1300,500);
    squares(300,700);
    squares(700,700);
    squares(1100,700);
    squares(100,900);
    squares(500,900);
    squares(900,900);
    squares(1300,900);
    squares(300,1100);
    squares(700,1100);
    squares(1100,1100);
    squares(100,1300);
    squares(500,1300);
    squares(900,1300);
    squares(1300,1300);
   
    
  }

  function squares(x,y){
      rect(x,y,200,200);
      ellipse(x+120,y+120,200,200);
      circles();
      triangles()

  function circles(){

    fill(255, 204, 100);
    ellipse(100,100,100,100);
    ellipse(200,100,100,100);
    ellipse(100,200,100,100);
    ellipse(100,300,100,100);
    ellipse(100,400,100,100);
    ellipse(300,100,100,100);
    fill(255, 255, 100);
    ellipse(400,100,100,100);
    for (i=1; i>16; i++){
      ellipse(i+100,1700,100,100)
    }
    ellipse(100,1700,100,100);
    // ellipse(200,1700,100,100);
    // ellipse(300,1700,100,100);
    // ellipse(400,1700,100,100);
    // ellipse(500,1700,100,100);
    // ellipse(600,1700,100,100);
    // ellipse(700,1700,100,100);
    // ellipse(800,1700,100,100);
    // ellipse(900,1700,100,100);
    // ellipse(1000,1700,100,100);
    // ellipse(1100,1700,100,100);
    // ellipse(1200,1700,100,100);
    // ellipse(1300,1700,100,100);
    // ellipse(1400,1700,100,100);
    // ellipse(1500,1700,100,100);
    // ellipse(1600,1700,100,100);
  }


  function triangles(){
    ellipse(100,100,100,100);
  }
  }