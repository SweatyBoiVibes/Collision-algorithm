function setup() {
  createCanvas(800,400);
  moving = createSprite(400, 200, 80, 30);
  fixed = createSprite(200,200, 50, 80);

  moving.shapeColor = "red"
  fixed.shapeColor = "red"
  moving.debug = true
  fixed.debug = true
}

function draw() {
  background(255,255,255);  
  moving.x = World.mouseX;
  moving.y = World.mouseY;
  if(moving.x-fixed.x < moving.width/2+fixed.width/2&&
    fixed.x-moving.x<moving.width/2+fixed.width/2&&
    moving.y-fixed.y < moving.width/2+fixed.width/2&&
    fixed.y-moving.y<moving.width/2+fixed.width/2){
    moving.shapeColor = "blue"
    fixed.shapeColor = "blue"
     
  }

  else{
moving.shapeColor = "red"
fixed.shapeColor = "red" 

  }
  drawSprites();
}