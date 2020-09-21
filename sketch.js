var box1,box2,box3;
var ground;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	ground=createSprite(400,689,800,20);
	//dustbin;
	box1 = createSprite(750,640,10,200);
	box2 = createSprite(600,640,10,200);
	box3 = createSprite(700,680,200,10);
	ball = createSprite(200,500,20,20);

	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.shapeColor= "red";
  box2.shapeColor= "red";
  box3.shapeColor= "red";
  ball.shapeColor = "blue";

  if(keyWentDown(UP_ARROW)){
	  ball.velocityY = -5;
	  ball.velocityX = 3;
	  
  }
  if(keyWentUp(UP_ARROW)){
	ball.velocityY = 3;
	ball.velocityX = 3;
  }
  ball.collide(box1);
  ball.collide(box2);
  ball.collide(box3);

  drawSprites();
 
}



