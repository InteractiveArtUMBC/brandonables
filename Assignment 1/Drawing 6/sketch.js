function setup() {
    createCanvas(2000, 2000);
 
  }
  
  function draw() {

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
    ellipse(100,100,100,100);
  }


  function triangles(){
    ellipse(100,100,100,100);
  }
  }