var bullet,wall;
var thickness, speed, weight;
var damage;
var state="pre";
var rating;

function setup() {
 createCanvas(1600,400);
  
  bullet=createSprite(50,200,60,20);
  wall=createSprite(1200,200,60,100);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=5;
  bullet.shapeColor="white";
  
 }

function draw() {
  background("black"); 
  if(state==="pre") {
    textSize(20);
    fill("white");
    text("Press Space Bar",600,50);
    if(keyWentUp("space")){
      state="running";
    }
  }    
if(state==="running"){
 speed=Math.round(random(223,321));
 weight=Math.round(random(25,30));
 thickness=Math.round(random(22,83));
if(bullet.collide(wall)){
bullet.velocityX=0;
var damage=(0.5*weight*speed*speed/(thickness*thickness*thickness));
if(damage>10){
wall.shapeColor="red"
rating="Bad"
}
if(damage<10){
wall.shapeColor="green"
rating="Good"
}
}
state="end";
}
if(state==="end"){
  if(damage>10){
    fill("red")
  }
  if(damage<10){
    fill("green")
  }
  textSize(20);
  text("speed:"+speed+"km/h",200,50);
  text(" weight:"+"kg",400,50);
  text("thickness:"+Math.round(thickness),700,50);

  textSize(25);
  text("Rating:"+rating,1000,50);
  text("Damage:"+damage,800,50);

  text("Press 'R' to reset",1200,50);
  if(keyDown("r")){
    reset();
  }
}
drawSprites();
}
function reset(){
  state="pre";
  bullet.x=50;
  wall.shapeColor=color(127,127,127);
}
