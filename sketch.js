const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
bobObject1= new Object(200,200)
bonb2Object=new Object(400,400)
bob3Object=new Object(600,600)
bob4Object=new Object(700,800)
bob5object=new object(900,900)

var pointA=this.rope.body.position;
varr pointB=this.rope.bodyB.position;


strokeWeight(2);

var Anchor1X=pointA.Anchor1X
var Anchor1Y=pointA.Anchor1Y

var Anchor2X=pointB.X+this.offsetX
var Anchor2Y=pointB.y+this.offsetY

ListeningStateChangedEvent(Anchor1x,Anchor1Y,Anchor1Y,Anchor2X,Anchor2Y);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



