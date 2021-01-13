
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var ground
var FoodGroup, obstacleGroup
var survivalTime = 0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  
  obstaclesGroup = createGroup();
  foodGroup = createGroup();
  
  monkey = createSprite(80,345,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  //monkey.debug = true;
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  //ground.debug = true;
}

function draw() { 
  background("white");
  console.log(monkey.y)
  console.log(ground.y)
  if (ground.x < 0 ){
      ground.x = ground.width/2;
    }
  if(keyDown("space") && monkey.collide(ground)) {
      monkey.velocityY = -14;
  }
  monkey.collide(ground);
  monkey.velocityY = monkey.velocityY + 0.8;
  if(frameCount % 80 === 0){
     food();
     obstacles();
     }
  stroke("white");
  textSize(20);
  fill("Orange");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time : " +survivalTime,60,60);
  drawSprites();
}
function food(){
  var randomY = Math.round(random(120,200));
  banana = createSprite(200,randomY,20,20);
  banana.addImage("food",bananaImage);
  banana.scale = 0.1;
  banana.lifetime = 70;
}
function obstacles(){
  var randomX = Math.round(random(180,220));
  obstacle = createSprite(randomX,335,20,20);
  obstacle.addImage("rock",obstacleImage);
  obstacle.scale = 0.1;
  obstacle.lifetime = 68;
}





