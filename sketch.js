
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, groundObject, launcherObject;

var world,boy;
var stone;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,110,30);
	mango3=new mango(1200,200,30);
	mango4=new mango(1050,190,30);
	mango5=new mango(950,215,30);

	


	treeObj=new tree(1050,600);
	groundObject=new ground(width/2,600,width,20);

	stone =new Stone(235,450,30)

	sling = new Sling(stone.body,{x:235,y:450});
	
	Engine.run(engine);

}

function draw() {

  background(135,206,235);
  //Add code for displaying text here!
  image(boy ,200,380,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  sling.display();

  groundObject.display();

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)

 

}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    sling.fly()
}
function detectCollision(lstone,lmango){
	mangoBodyPos=lmango.body.position
	stoneBodyPos=lstone.body.position

	var shazeb=dist(stoneBodyPos.x, stoneBodyPos.y, mangoBodyPos.x, mangoBodyPos.y)
		if(shazeb<=lmango.r+lstone.r)
		{
			Matter.Body.setStatic(lmango.body,false);
		}

}
function keyPressed(){
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:235, y:400})
		sling.attach(stone.body)
		
	}
}
