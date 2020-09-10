const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground;
var ball; 



function setup()
{ createCanvas(400,400);
engine = Engine.create();
world = engine.world; 
var options = {
isStatic : true
} 
var balloptions = {
  restitution:1.0
}
ball = Bodies.circle(200,100,20,balloptions);
World.add(world,ball)
ground = Bodies.rectangle(200,390,400,20,options);
World.add(world,ground);
} 

function draw() 
{ background(0); 
Engine.update(engine);
rectMode(CENTER);
rect (ground.position.x,ground.position.y,400,20); 

ellipseMode(RADIUS)
ellipse(ball.position.x, ball.position.y, 20,20)



}






