
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ballImage;
var sky,skyImage;
var sky2, sky2Image;
var sky3, sky3Image;
var sky4, sky4Image;
var ground1, ground2, ground3, ground4;
var ball1;
var sun;

function preload(){

	 skyImage = loadImage("floor.png");
	 sky2Image = loadImage("ground.png");
	 sky3Image = loadImage("ground.png");
	 sky4Image = loadImage("ground.png");
	 sunImage = loadImage("sun.png");
}

function setup() {
	createCanvas(1164, 512);


	engine = Engine.create();
	world = engine.world;




	sky3 = createSprite(800,440);
	sky3.addImage(sky3Image);
	sky3.scale = 0.2
	sky3.rotation = 90;

	sky3 = createSprite(1000,440);
	sky3.addImage(sky4Image);
	sky3.scale = 0.2
	sky3.rotation = 90;

	
	sky2 = createSprite(899,433);
	sky2.addImage(sky2Image);
	sky2.scale = 0.2

	ground = createSprite(580,486);
	ground.addImage(skyImage);
	ground.scale = 0.59

	ground1 = new Ground(380,480, 2165,40);
	ball1 = new Ball(100,478.8);

	ground2 = new Ground(900, 450,200,20);
	ground3 = new Ground(800, 430,20, 200);
	ground4 = new Ground(1000, 430,20, 200);
	ground5 = new Ground(1180, 430,20, 10000163);

	sun = createSprite(1100,60);
	sun.addImage(sunImage);
	sun.scale = 1;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  Engine.update(engine);
  ground1.display();
  ball1.display();

  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  	


  drawSprites();

  textSize(20);
  stroke("black");
  strokeWeight(2)
  fill("white");
  text ("DUSTBIN",857, 440);

  textSize(20);
  stroke("black");
  strokeWeight(2)
  fill("white");
  text ("GARBAGE",50,380 );

 
}

function keyPressed(){

if (keyCode === UP_ARROW){
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:305,y:-305});
}
}

