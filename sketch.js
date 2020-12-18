const Engine = Matter.Engine,
      World  = Matter.World,
      Bodies = Matter.Bodies;

var engine, world, ball, ground;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = Engine.world;

  ball = Bodies.rectangle(300,200,50,50);
  World.add(world,ball);
  console.log(ball);

}

function draw() {
  background(255,255,255);  

  rectMode(CENTER);
  rect(200,200,50,50);


  drawSprites();
}