var m,s;






function setup() {
  createCanvas(800,400);
  m=createSprite(400, 200, 50, 50);
s=createSprite(550,200,65,65);
m.shapeColor="red"
s.shapeColor="red";




}

function draw() {
  background(255,255,255);  
  s.x=mouseX;
  s.y=mouseY;
if(s.x-m.x<=s.width/2+m.width/2&&m.x-s.x<=m.width/2+s.width/2&&s.y-m.y<=
  s.height/2+m.height/2&&m.y-s.y<=s.height/2+m.height/2)

 {
  m.shapeColor="blue"
  s.shapeColor="blue";


 } 
 else
 {
  m.shapeColor="red"
  s.shapeColor="red";
 }


  drawSprites();




}