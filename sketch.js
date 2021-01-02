
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperImage, dustbinImage;

function preload(){
 	 paperImage = loadImage("paper.png");
   dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
 
 	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(670,500,150,20);
	dustbin2 = new Dustbin(600,460,20,100);
	dustbin3 = new Dustbin(740,460,20,100);
  
  

  ground1 = new Ground(400,520,800,15);

  paper1 = new Paper(200,500,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();

  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  ground1.display();

  imageMode(CENTER);
  image(dustbinImage,670,435,180,160);




}
function keyPressed(){ 
  if(keyCode === UP_ARROW){ 
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-65}); 
    }
     }


