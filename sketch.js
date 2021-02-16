var candy, squishy
var cat, dog
function setup() {
  createCanvas(800,400);
  candy=createSprite(400, 200, 50, 50);
  squishy=createSprite(300,100, 40, 40);
  candy.shapeColor= "purple"
  squishy.shapeColor= "purple"
  candy.debug=true
  squishy.debug=true
cat=createSprite (50, 200, 50, 50)
cat.velocityX=2
dog=createSprite (750, 200, 50, 50)
dog.velocityX=-2
}


function draw() {
  background(0);  
  drawSprites();
  candy.x= mouseX
  candy.y= mouseY
  if (candy.x-squishy.x<candy.width/2+ squishy.width/2 && squishy.x- candy.x<candy.width/2+ squishy.width/2 
    && candy.y-squishy.y<candy.height/2 +squishy.height/2 && squishy.y-candy.y< candy.height/2+squishy.height/2 ){
    candy.shapeColor= "pink"
    squishy.shapeColor= "blue"
  }
else {
  candy.shapeColor= "purple"
  squishy.shapeColor= "purple"
}
if (dog.x-cat.x<dog.width/2+ cat.width/2 ){
  cat.velocityX*=-1;
  dog.velocityX*=-1;
}
}
