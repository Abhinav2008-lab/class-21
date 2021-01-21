var movingRect, fixedRect;
var box1, box2, box3, box4;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 200, 80, 30);
  fixedRect = createSprite(200,700,50,80);
  box1 = createSprite(100,100,50,50);
  box2 = createSprite(200,200,50,50);
  box3 = createSprite(300,100,50,50);
  box4 = createSprite(400,100,50,50);

  
  box2.velocityY = 5;
}

function draw() {
  background(0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //console.log(movingRect.width/2 + fixedRect.width/2);
  //console.log(movingRect.x - fixedRect.x);
  console.log(fixedRect.x - movingRect.x);

// movingRect and box1 are the actual parameters
  if(isTouching(movingRect, box3)){
    movingRect.shapeColor = "red";
    box3.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    box3.shapeColor = "green";
  }

  bounceOff(box2, fixedRect);
  drawSprites();
}

