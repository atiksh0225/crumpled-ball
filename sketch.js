const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Cornstraint;
var engine, world;
var ground;
var ball;
var slingShot;
var log;
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    var ball_option =  {
    restitution:0.8    
    }
    ball = Bodies.circle(200, 100, 20, ball_option) ;
    World.add(world, ball) ;
    slingShot = new Slingshot(this.ball,{x:400,y:100});
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,390,2000,20,ground_options);
    World.add(world,ground);

    log = createSprite(200, 350, 200, 20); 
    log.shapeColor = "red";
    
    
    
    
    
    
    
    
    
    
    
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
    slingShot.display();
}








