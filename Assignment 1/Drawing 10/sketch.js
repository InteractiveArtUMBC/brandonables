var x = 0;
var y = 0;

function setup() {
    createCanvas(1400,600);
    frameRate(50);
    

  
 
  }
  
  function draw() {
    background(0);


    x+=5;

    if(x > width-50){
    x = 50;

    y+=5;

    if(y > length-50){
      y=50;

    }


    }
stroke(90);

fill(0,0,255)

rect(x,25,25,25);
fill(255,0,255);
rect(100,100,40,40);

rect(x-400,100,50,50);
fill(100,100,0);
rect(200,100,40,40);

rect(x+300,200,100,100);
fill(255,255,0);
rect(300,100,40,40);

rect(x,350,10,10);
fill(0,255,0);
rect(400,100,40,40);

rect(x-200,400,150,150);
fill(255,100,0);
rect(500,100,40,40);

ellipse(x+100,y+50,50,50);
fill(255,255,0);




  }

