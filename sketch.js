
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper;
var box1,ground;



function setup() {
	createCanvas(1200, 600);
	
	engine = Engine.create();
	world = engine.world;

    paper = new Paper(100,500,20);
    ground = new Ground(600,590,1200,20);
    box1 = new Dustbin(1000,500,120,160);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  text(mouseX + "," + mouseY,10,15)

  paper.display();
  ground.display();
  box1.display();
 
  drawSprites();
  }

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}
}
