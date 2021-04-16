var score = 0
var lives = 3
var timer = 5;
var score = 0
var gameState = 0;
var policeMan, heart1,heart2,heart3
var backgroundImg;

function preload(){
  
}

function setup() {

  createCanvas(800,400);
  policeMan = new Police();
}

function draw() {
  background(255,255,255);
  
  if(gameState === 0){
    text("press space to serve",width/2,height/2);

      if(keyWentDown("space")){
        gameState = 1;
      }
  }else if(gameState === 1){
            policeMan.createPlayer();
  } else{
    
  }
  drawSprites();
}