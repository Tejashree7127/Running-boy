var road,boy
var roadImage,boyImage,invisibleGround,invisibleGround2
function preload(){
  //pre-load images
  roadImage = loadImage("path.png")
  boyImage = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  //create road here
  road= createSprite(200,200);
  road.addImage("road",roadImage);
  road.scale=1.2;
  road.velocityY=4;
  console.log(road)

//create boy here
  boy= createSprite(150,310);
  boy.addAnimation("boy",boyImage);
  boy.scale=0.1
  
  

  invisibleGround=createSprite(0,0,100,800)
 // invisibleGround.visible=false


invisibleGround2=createSprite(410,0,100,800)
 // invisibleGround2.visible=false


 
}

function draw() {
 background("white");

boy.x=World.mouseX



edges=createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide (invisibleGround);
  boy.collide(invisibleGround2);


//path moving
if(road.y>400){
road.y=height/2;
}


drawSprites();
}
