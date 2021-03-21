const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer;
var rubber,stone,iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    rubber= new Rubber(300,300,70);
    stone = new Stone(600,300);
    iron = new Iron(900,200)
    hammer = new Hammer(10,100);
  
    Engine.run(engine);
}

function draw(){

    background("lightBlue");
    rectMode(CENTER);
    Engine.update(engine);

    plane.display();
    rubber.display();
    stone.display();
    iron.display();
    hammer.display();
}