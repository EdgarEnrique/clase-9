var box
function setup() {
  createCanvas(800,1000);
  box=createSprite(400,500,30,30)
}

function draw() 
{
  background("green");
if(keyIsDown(UP_ARROW)){
  box.y-=5
  background("blue")
}
if(keyIsDown(DOWN_ARROW)){
  box.y+=5
  background("red")
}
if(keyIsDown(RIGHT_ARROW)){
  box.x+=5
  background("yellow")
}
if(keyIsDown(LEFT_ARROW)){
  box.x-=5
  background("orange")
}







 drawSprites()
}




