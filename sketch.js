//making variables
var gameState,PLAY,END;

    
   var virus,virusAnimation,warrior,warriorAnimation,wariorXposition,IntroAnimation,bullet,bulletImg,doorAnimation,doorStart,ladder,ladderImg,upSide,downSide,bigCovidScore,bigvirus,big,heart1,heart2,heart3,heart4,heart5,heartImg,heartcor,VirusScore,gameOver,gameOverImg,space1,restartImg;
   
   
   var bulletGroup,bigCovidGroup,virusGroup;
   
   
   var randomizer,randomizer2,randomizer1,background1,backgroundImg,scoreV;


function preload(){
  
  restartImg = loadImage("restart1.png")
  gameOverImg = loadImage("gameOver.png")
  warriorAnimation = loadImage("warrior.png");
  heartImg = loadImage("heart.png")
  bulletImg = loadImage("medicine.png");
  virusAnimation = loadImage("virus.png");
  backgroundImg = loadImage("backGrou.png");
  ladderImg = loadImage("Ladder.png")
  doorAnimation = loadAnimation("ani.jpg","ani2.jpg","ani3.jpg","ani4.jpg","ani5.jpg","ani6.jpg","ani7.jpg","ani8.jpg","ani9.jpg","ani10.jpg","ani11.jpg","ani12.jpg","ani13.jpg","ani14.jpg","ani15.jpg","ani16.jpg","ani17.jpg","ani18.jpg","ani19.jpg","ani20.jpg","ani21.jpg","ani22.jpg","ani23.jpg","ani24.jpg","ani25.jpg","ani26.jpg","ani27.jpg","ani28.jpg","ani29.jpg","ani30.jpg","ani31.jpg","ani32.jpg","ani33.jpg","ani34.jpg","ani35.jpg","ani36.jpg","ani37.jpg","ani38.jpg","ani39.jpg","ani40.jpg","ani41.jpg","ani42.jpg","ani43.jpg","ani44.jpg","ani45.jpg","ani46.jpg","ani47.jpg","ani48.jpg","ani49.jpg","ani50.jpg","ani51.jpg","ani52.jpg","ani53.jpg","ani54.jpg","ani55.jpg","ani56.jpg","ani57.jpg")
  
  
}
function setup() {
  
  createCanvas(windowWidth,windowHeight);
  
  gameState = 1;
  VirusScore = 5;
  ScoreV = 0;

  doorStart = createSprite(windowWidth/2,windowHeight/2 +30,20,20)
  doorStart.addAnimation("Anim",doorAnimation)
  doorStart.scale = 0.60;
  doorStart.visible = true;

  background1 = createSprite(windowWidth/2,windowHeight/2,20,20);
  background1.addImage("lab",backgroundImg)
  background1.scale = 2.03
  background1.visible = false
  
  warrior = createSprite(windowWidth - windowWidth + 158,200,20,20);
  warrior.addImage("war",warriorAnimation);
  warrior.setCollider('rectangle',-110,20,96,280)
  warrior.visible = false
  
  space1 = createSprite(windowWidth/2-3,windowHeight/2 + 140,20,20);
  space1.addImage("rest",restartImg)
  space1.scale = 0.16
  space1.debug = true
  space1.visible = false
  
  
  heart1 = createSprite(80,24,20,20)
  heart1.addImage("A",heartImg)
  heart1.visible = false
  heart1.scale = 0.13
  
  heart2 = createSprite(120,24,20,20)
  heart2.addImage("A",heartImg)
  heart2.visible = false
  heart2.scale = 0.13
  
  heart3 = createSprite(160,24,20,20)
  heart3.addImage("A",heartImg)
  heart3.visible = false
  heart3.scale = 0.13
  
  heart4 = createSprite(200,24,20,20)
  heart4.addImage("A",heartImg)
  heart4.visible = false
  heart4.scale = 0.13

  heart5 = createSprite(240,24,20,20)
  heart5.addImage("A",heartImg)
  heart5.visible = false
  heart5.scale = 0.13
  
  
  bigCovidScore = 306;
  
  
  randomizer = 500
  randomizer1 = 500
  randomizer2 = 400
  //randomizer = Math.round(random(700,3500));
  //randomizer1 = Math.round(random(700,5000));
  //randomizer2 = Math.round(random(700,6500));
  console.log(randomizer);
  
  upSide = createSprite(windowWidth/2,windowHeight-windowHeight-50,windowWidth,20)
  upSide.visible = false
  
  downSide = createSprite(windowWidth/2,windowHeight+10,windowWidth,20)
  downSide.visible = false
  
  gameOver = createSprite(windowWidth/2,windowHeight/2,50,50);
  gameOver.addImage("B",gameOverImg);
  gameOver.visible = false;
  gameOver.scale = 2.38;
  
  heartcor = 160
  big = "OFF"
  
  
  
  bulletGroup = new Group()
  bigCovidGroup = new Group()
  virusGroup = new Group()
}

function draw() {
  background("black");
 
  if(gameState === 2){
    warrior.visible = true;
    warrior.scale = 0.35
  }
   
  
  
  if(gameState === 1){
  
    touches = touches + 123
  warrior.scale = 0.75     
    console.log(VirusScore)
    
    warrior.x = windowWidth - windowWidth + 158;
    
    warrior.y = World.mouseY
    
    if(frameCount === 240){
   doorStart.destroy()
}
    
   if(frameCount === randomizer - 250){ 
    big = "ON";
    BigCovid()
    bigCovidScore = 306
   }
    
    
    if(bigCovidScore <= 0 && big == "ON"){
      big = "OFF";
      bigCovidGroup.destroyEach();
      randomizer = randomizer + random(randomizer1,randomizer2); 
      bigCovidScore = bigCovidScore + 20
    }
    
    
    console.log(randomizer)
    
    warrior.collide(upSide);
    warrior.collide(downSide);
    
    if(frameCount === 242){
      background1.visible = true
      warrior.visible = true
      heart1.visible = true
      heart2.visible = true
      heart3.visible = true
      heart4.visible = true
      heart5.visible = true
    }
    
    if(bulletGroup.x <= windowWidth - windowWidth - 200){
      console.log(windowWidth)
      bulletGroup[0].remove()
    }
    
    if(bigCovidGroup.isTouching(warrior)){
      VirusScore = VirusScore - 5
      bigCovidGroup[0].remove()
    }
    
    if(virusGroup.isTouching(warrior)){
      VirusScore = VirusScore - 0.50
      virusGroup[0].remove()
    }
    
    if(virusGroup.x <= -1){
      VirusScore = VirusScore - 5
      virusGroup[0].remove()
    }
    
    if(VirusScore === 2){
      heart3.visible = false
      heart4.visible = false
      heart5.visible = false
    }
    
    if(VirusScore === 3){
      heart4.visible = false
      heart5.visible = false
    }
    
    if(VirusScore === 4){
      heart5.visible = false
    }
    
    if(VirusScore <= 0){
      gameState = 3
      warrior.visible = false
      Big = "ON"
      heart1.visible = false
      heart2.visible = false
      heart3.visible = false
      heart4.visible = false
      heart5.visible = false
    }
    

    console.log(bigCovidScore);
    
    if(VirusScore === 1){
      heart2.visible = false
      heart3.visible = false
      heart4.visible = false
      heart5.visible = false
    }
    
  if(bulletGroup.isTouching(virusGroup)){
     bulletGroup[0].destroy()
     virusGroup[0].destroy()
     scoreV = scoreV + 1;
  }
    
   if(bulletGroup.isTouching(bigCovidGroup)){
     bulletGroup[0].remove()
     bigCovidScore = bigCovidScore -  2.16
     scalingDownBigVirus()
  } 
    
    
  if(frameCount >= 230 && big === "OFF"){
    Covid()
}
    gameOver.visible = false;
    space1.visible = false;
    
    if(keyDown("space")&&frameCount >= 238){
      createBullet()
    }
    
    
    textFont("Cooper Black")
    textSize(24)
    fill("magenta")
    text("Score =" + scoreV,400,200)
    
  }
  
  
  if(gameState === 3){
    
    gameOver.visible = true;
    background1.visible = false;
    warrior.visible = false;
    space1.visible = true;
    
    if(mousePressedOver(space1)) {
      gameState = 1;
      Big = "OFF"
      background1.visible = true;
      warrior.visible = true;
      VirusScore = 5;  
      ScoreV = 0;
      bigCovidScore = 306
      heart1.visible = true;
      heart2.visible = true;
      heart3.visible = true;
      heart4.visible = true;
      heart5.visible = true;
    }
    
  bulletGroup.destroyEach();
  bigCovidGroup.destroyEach();
  virusGroup.destroyEach();
  }
  
  drawSprites()
}

function createBullet(){
  
  if(frameCount % 3 === 0){
  bullet = createSprite(200,warrior.y,20,20);
  bullet.addImage("fight",bulletImg);
  bullet.scale = 0.14
  bullet.velocityX= 8;
  bullet.lifetime = 2000;  
  warrior.y = bullet.y;
    
    
    bulletGroup.add(bullet)
  }
}

function Covid(){
  if(frameCount % 39 === 0){
  virus = createSprite(2000,random(windowHeight-100,20),200,20,20);
  virus.addImage("danger",virusAnimation);
  virus.scale = 0.22
  virus.velocityX= -7;
  virus.lifetime = 2000;
  virus.setCollider('circle',0,0,107)
  virusGroup.add(virus);
  }
}

function BigCovid(){
  bigvirus = createSprite(2100,windowHeight/2,20,20);
  bigvirus.addImage("danger",virusAnimation);
  bigvirus.scale = 1.63
  bigvirus.velocityX = -3.35;
  virus.lifetime = 3400;
  bigvirus.setCollider('circle',0,0,137)
  bigCovidGroup.add(bigvirus);

}


function scalingDownBigVirus(){
  if(bigvirus.scale>=0){
    bigvirus.scale = bigvirus.scale - 0.01;
  }
  
  
  if(bigvirus.velocityX>=0){
    bigvirus.velocityX = bigvirus.velocityX + 0.01;
  }
}