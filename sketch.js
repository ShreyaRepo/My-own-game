var score = 0
var lives = 3
var timer = 5;
var score = 0
var gameState = 0;
var greeting;
var policeMan, walls, heart1,heart2,heart3,heartImg,game, virus;
var backgroundImg,coronavirusImg, maskImg, roadImg, sanitizerImg, vaccineImg, welcomeImg, personAnimation;

function preload(){
  backgroundImg = loadImage("images/track.jpg");
  coronavirusImg = loadImage("images/corona.png");
  maskImg = loadImage("images/mask.jpg");
  roadImg = loadImage("images/road_2.jpg");
  sanitizerImg = loadImage("images/sanitizer.jpg");
  vaccineImg = loadImage("images/vaccine.jpg");
  welcomeImg = loadImage("images/welcome.png");
  heartImg = loadImage("images/heart.jpg");
  personAnimation = loadAnimation("images/person1.png", "images/person2.png", "images/person3.png","images/person4.png");
}

function setup() {
  //createCanvas(displayWidth-60,displayHeight-100);  
  createCanvas(800,800)
   
  greeting = createSprite(600,200);
  greeting.addImage("welcome", welcomeImg);
  greeting.visible = false

  game = new Game();
  policeMan = new Police();
  virus = new Virus();
  walls = new Wall();

}

function draw() {
  background("aqua");
  
  if(gameState === 0){
    greeting.visible = true
    textSize(20);
    fill("red");
    text("press space to serve",width/2-100,height/2+200);

      if(keyWentDown("space")){
        gameState = 1;
      }
  }else if(gameState === 1){
    greeting.visible = false;
           // game.displayHearts();
            policeMan.createPlayer();
            virus.virusControls();   
            walls.createWalls();
  } else{
    
  }
  drawSprites();
}