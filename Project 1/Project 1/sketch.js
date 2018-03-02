
function setup(){
	createCanvas(1000,600);
	fill(255,0,0)
	frameRate(100); 
	background(200,0,0)
  }
  function draw(){
	squares(10,10);
	squares(30,30);
	fill(0,0,0);
	rect(630, 20, 55, 55);
	rect(530, 10, 35, 35);
	rect(580, 5, 15, 15);
	rect(600, 5, 5, 5);
	fill(0,0,255)
	rect(620, 20, 5, 20);
	circles(50,50);
	triangle(30, 75, 58, 20, 86, 75)
	triangle(330, 375, 358, 320, 386, 375)
	line(130, 120, 185, 120);
	arc(150, 25, 70, 70, PI, PI + QUARTER_PI);
	arc(250, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
	arc(750, 450, 80, 80, 0, PI + QUARTER_PI, CHORD);
	line(300, 100, 500, 100);
stroke(126);
line(500, 100, 500, 700);
stroke(255);
line(500, 700, 300, 700);
stroke(126);
line(185, 120, 185, 175);
stroke(255);
line(185, 175, 130, 175);
line(200, 400, 200, 300);
line(300, 600, 100, 400);
fill(0,255,0);
line(300, 450, 800, 100);
line(100, 100, 700, 300);
line(100, 100, 700, 50);
fill(255,255,100)
line(25, 50, 600, 90);
line(900, 50, 800, 90);
line(700, 10, 600, 50);
line(800, 500, 725, 300);
ellipse(800,300,100,75,6)
ellipse(400,200,25,50,20)
fill(0,0,0);
stroke(6);
line(430, 420, 85, 75);
line(5, 5, 7, 500);
line(630, 220, 85, 75);
line(50, 220, 10, 500);
line(25, 50, 100, 300);
line(25, 50, 25, 300);
ellipse(10,50,25,50,20)
ellipse(2,10,15,20,10)
ellipse(500,450,25,50,20)
ellipse(510,450,25,50,20)
ellipse(550,450,25,50,20)
ellipse(560,430,25,50,20)
ellipse(660,430,125,50,20)
triangle(400, 300, 500, 200, 500, 400);
fill(244,146,66);
triangle(200, 300, 200, 200, 400, 700);
fill(66,244,215);
triangle(150, 100, 700, 100, 700, 150);
noFill();
arc(350, 55, 60, 60, HALF_PI, PI);
arc(375, 25, 60, 60, HALF_PI, PI);
arc(400, 25, 60, 60, HALF_PI, PI);
arc(400, 5, 60, 60, HALF_PI, PI);
arc(410, 7, 60, 70, HALF_PI, PI);
arc(420, 9, 60, 80, HALF_PI, PI);
arc(720, 12, 60, 80, HALF_PI, PI);
arc(820, 212, 60, 80, HALF_PI, PI);
arc(920, 312, 60, 80, HALF_PI, PI);
fill(11, 30, 61);
triangle(850, 0, 875, 500, 890, 350);
fill(155,66,244);
ellipse(650,200,300,20,20);
fill(244,66,113);
ellipse(650,225,300,20,20);
fill(66,223,244);
strokeWeight(8);
ellipse(650,250,300,20,20);
strokeWeight(1);

  }
  
  function squares(x,y){
	  translate(x,y);
	  push();
	  fill(200,100,0);
	  rect(1,1,10,10);
	  rect(1,1,10,10);
	  pop();
  }
  function circles(x,y){
	  translate(x,y);
	  push();
	  fill(200,100,0);
	  ellipse(100,200,10,10);
	  ellipse(100,100,10,10);
	  pop();
  }

  function triangles(x,y){
	translate(x,y);
	push();
	fill(200,200,0);
	traingle(20,65,48,10,76,65)
  }


