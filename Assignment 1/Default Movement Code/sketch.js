var x = 0;

function setup() {
    createCanvas(600,400);
    frameRate(30);
    

  
 
  }
  
  function draw() {
    background(0);


    x+=5;

    if(x > width-50){
    x = 50;


    }
stroke(90);

fill(0,0,255)

rect(x,100,50,50);
fill(255,0,255);
rect(100,100,40,40);

  }

