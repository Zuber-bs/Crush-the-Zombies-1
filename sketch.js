const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

// Bases
var ground;
var wall1;
var wall2;

// Bridge
var bridge;
var link;

// Stones
var stones = [];

function setup() {
  rectMode(CENTER);
  createCanvas(windowWidth - 20, windowHeight - 20);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(width/2, height, width, 40);
  wall1 = new Base(width, height/2, 200, height);
  wall2 = new Base(0, height/2, 200, height);

  bridge = new Bridge(25, {x: 110, y: 100});
  link = new Link(bridge, wall1);

  for(var i = 0; i < 8; i++) {
    stones.push(new Stone(random(150, width - 150), random(0, 50), random(10, 50)));
  }

}

function draw() {
  background(51);
  Engine.update(engine);

  ground.display();
  wall1.display();
  wall2.display();

  bridge.show();

  for(var i = 0; i < stones.length; i++) {
    stones[i].display();
  }
}
