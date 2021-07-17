var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

var particle = [];
var plinko = [];
var division = [];


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  //1
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  //2
    for (var k = 0; k <=80; k = k +80) {
    divisions.push(new Divisions(k+150, height-divisionHeight/2, 10, divisionHeight));
  }
  //3
  for (var k = 0; k <=80; k = k +80) {
    divisions.push(new Divisions(k+300, height-divisionHeight/2, 10, divisionHeight));
  }
   //4
   for (var k = 0; k <=80; k = k +80) {
    divisions.push(new Divisions(k+450, height-divisionHeight/2, 10, divisionHeight));
  }
  //5
  for (var k = 0; k <=80; k = k +80) {
    divisions.push(new Divisions(k+600, height-divisionHeight/2, 10, divisionHeight));
  }
  //6
  for (var k = 0; k <=80; k = k +80) {
    divisions.push(new Divisions(k+750, height-divisionHeight/2, 10, divisionHeight));
  }
  //1
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }
  //2
  for (var j = 15; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }
  //3
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }
  //4
  for (var j = 15; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if (frameCountn%60===0){

    particles.push(new particle(random(width/2-10,width/2+10), 10,10));

  }

  particles.display();

}