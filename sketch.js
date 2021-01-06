
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

	 skyImage = loadImage("ground.png");
	 sky2Image = loadImage("ground.png");
	 sky3Image = loadImage("ground.png");
	 sky4Image = loadImage("ground.png");
	 sunImage = loadImage("sun.png");
}

function setup() {
	createCanvas(1164, 500);


	engine = Engine.create();
	world = engine.world;



	 sky2 = createSprite(899,456);
	sky2.addImage(skyImage);
	sky2.scale = 0.2

	sky3 = createSprite(800,440);
	sky3.addImage(skyImage);
	sky3.scale = 0.2
	sky3.rotation = 90;

	sky3 = createSprite(1000,440);
	sky3.addImage(skyImage);
	sky3.scale = 0.2
	sky3.rotation = 90;

	ground = createSprite(580,546);
	ground.addImage(skyImage);
	ground.scale = 1.2

	sun = createSprite(1100,60);
	sun.addImage(sunImage);
	sun.scale = 1;

	ground1 = new Ground(380,height, 2165,40);
	ball1 = new Ball(100,420);

	ground2 = new Ground(900, 470,200,20);
	ground3 = new Ground(800, 430,20, 200);
	ground4 = new Ground(1000, 430,20, 200);
	ground5 = new Ground(1180, 430,20, 10000163);



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
  stroke("orange");
  strokeWeight(3)
  fill("red");
  text ("DUSTBIN",857, 485);

  textSize(20);
  stroke("orange");
  strokeWeight(3)
  fill("red");
  text ("GARBAGE",50,485 );

 
}

function keyPressed(){

if (keyCode === UP_ARROW){
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:300,y:-300});
}
}

