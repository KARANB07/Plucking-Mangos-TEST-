var t;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gameState="pre";
var ti,li,pi,ri;

function preload()
{
	ti=loadImage("tree.png")
	li=loadImage("mango.png")
	pi=loadImage("boy.png")
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;
	t=new stone(200,510,20);
	c=new SlingShot(t.body,{x:200,y:510})
	g=new ground(200,690,5,1000000)
  m1=new mango(1000,430);
  m2= new mango(1340,450)
  m3=new mango(1080,250)
  m4=new mango(1100,470)
  m5=new mango(1260,450)
	b=new boyy(200,200)
	tree=createSprite(1200,440,10,10)
	tree.addImage(ti);
	tree.scale=0.4;
	tree.depth=tree.depth-5;
	//tree.debug=true;
	//image(pi,200,200,90,90)

	//Create the Bodies Here.



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("teal");
  textSize(30);
  text("Press Space to Play Again",200,200)
  t.display();
  c.display();
  g.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  b.display();text("Press Space to Play Again",200,200)
  detectCollision(t,m1);
  detectCollision(t,m2);
  detectCollision(t,m3);
  detectCollision(t,m4);
  detectCollision(t,m5);
  //keyPressed();
  drawSprites();
 
}


function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(t.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    c.fly();
    gameState = "launched";
}

function detectCollision(lstone, lmango)
{
 mangoBodyPosition = lmango.body.position
 stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  
  if(distance<=lmango.r+lstone.r)
  {
	  Matter.Body.setStatic(lmango.body, false);
  }

}

function keyPressed(){
  if(keyCode === 32){
     c.attach(t.body);
     gameState="pre"

       }
}