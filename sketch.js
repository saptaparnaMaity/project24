const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3,ground,paper;
function preload()
{}
	

function setup() {
	createCanvas(900, 700);
	rectMode(CENTER);
    

	
	engine = Engine.create();
	world = engine.world;

    
    paper= new paper(50,680,20,20);
    dustbin1= new Dustbin(600,590,15,150);
    dustbin2= new Dustbin(800,590,15,150);
    dustbin3= new Dustbin(700,650,190,15);
ground= new Ground(450,660,900,10);
       

	 
	
	
	 Engine.run(engine);
  
}


function draw() {
    rectMode(CENTER);
  background(0);
  
 paper.display();
  dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 ground.display();

 
 drawSprites();
 
}

function keyPressed() {
 if (keyDown(UP_ARROW)) {
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

    
  }
}





