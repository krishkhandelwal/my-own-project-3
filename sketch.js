var lee,running_lee,gun_lee,lee_img;
var bgImg,bg;
var zombie,zombieImg,zombieImg2,zombieGroup;
var monster,monsterImg,monsterGroup;
var bullet,bulletImg,bulletGroup;
var survivors,survivorsImg,survivorsGroup;

var bulletCount;
var gameState,PLAY,END;
var medicineImg;

var save1,save2,save3,save4,save5,save6,save7,save8,save9,save10,save11,save12,save13,save14,save15;
var life1,life2,life3,life4,life5,life6,life7;
var ls1,ls2,ls3,ls4,ls5,ls6,ls7,ls8,ls9,ls10,ls11,ls12,ls13,ls14,ls15;
function preload(){
running_lee = loadAnimation("sprites/p1r1.png","sprites/p1r2.png","sprites/p1r3.png","sprites/p1r4.png","sprites/p1r5.png","sprites/p1r6.png");
gun_lee = loadAnimation("sprites/p1gr1.png","sprites/p1gr2.png","sprites/p1gr3.png","sprites/p1gr4.png","sprites/p1gr5.png");
lee_img = loadAnimation("sprites/p1s1.png");
bgImg = loadImage("sprites/bg.jpg");
zombieImg = loadAnimation("sprites/z1r4.png","sprites/z1r5.png","sprites/z1r6.png","sprites/z1r7.png","sprites/z1r8.png","sprites/z1r9.png","sprites/z1r10.png",)
bulletImg = loadImage("sprites/bullet.png")
monsterImg = loadAnimation("sprites/z2r1.png","sprites/z2r2.png","sprites/z2r3.png","sprites/z2r4.png","sprites/z2r5.png","sprites/z2r6.png","sprites/z2r7.png")
zombieImg2 = loadAnimation("sprites/z3r4.png","sprites/z3r5.png","sprites/z3r6.png","sprites/z3r7.png","sprites/z3r8.png","sprites/z3r9.png","sprites/z3r10.png")
survivorsImg = loadImage("sprites/human1.png"); 
medicineImg = loadAnimation("sprites/med6.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,20);
  bg.addImage(bgImg);
  bg.scale = 4;
  bg.x = bg.width/2;
  bg.velocityX = -2;

  lee = createSprite(50,displayHeight - 150, 50, 50);
  //lee.addAnimation("standing",lee_img);
  lee.addAnimation("running",running_lee);
  lee.addAnimation("gun",gun_lee);
  lee.scale = 2;

  bulletCount = 0;

  zombieGroup = new Group();
  monsterGroup = new Group();
  bulletGroup = new Group();
  survivorsGroup = new Group();

  PLAY = 1;
  END = 0;
  gameState = PLAY;

  console.log(displayHeight);

  save1 = createSprite(displayWidth - 200,displayHeight / 6,5,10);
  save1.shapeColor = "green";
  save2 = createSprite(displayWidth - 195,displayHeight / 6,5,10);
  save2.shapeColor = "green";
  save3 = createSprite(displayWidth - 190,displayHeight / 6,5,10);
  save3.shapeColor = "green";
  save4 = createSprite(displayWidth - 185,displayHeight / 6,5,10);
  save4.shapeColor = "green";
  save5 = createSprite(displayWidth - 180,displayHeight / 6,5,10);
  save5.shapeColor = "green";
  save6 = createSprite(displayWidth - 175,displayHeight / 6,5,10);
  save6.shapeColor = "green";
  save7 = createSprite(displayWidth - 170,displayHeight / 6,5,10);
  save7.shapeColor = "green";
  save8 = createSprite(displayWidth - 165,displayHeight / 6,5,10);
  save8.shapeColor = "green";
  save9 = createSprite(displayWidth - 160,displayHeight / 6,5,10);
  save9.shapeColor = "green";
  save10 = createSprite(displayWidth - 155,displayHeight / 6,5,10);
  save10.shapeColor = "green";
  save11 = createSprite(displayWidth - 150,displayHeight / 6,5,10);
  save11.shapeColor = "green";
  save12 = createSprite(displayWidth - 145,displayHeight / 6,5,10);
  save12.shapeColor = "green";
  save13 = createSprite(displayWidth - 140,displayHeight / 6,5,10);
  save13.shapeColor = "green";
  save14 = createSprite(displayWidth - 135,displayHeight / 6,5,10);
  save14.shapeColor = "green";
  save15 = createSprite(displayWidth - 130,displayHeight / 6,5,10);
  save15.shapeColor = "green";

  life1 = createSprite(displayWidth - 198,displayHeight/6 - 20,10,10);
  life1.shapeColor = "red";
  life2 = createSprite(displayWidth - 188,displayHeight/6 - 20,10,10);
  life2.shapeColor = "red";
  life3 = createSprite(displayWidth - 178,displayHeight/6 - 20,10,10);
  life3.shapeColor = "red";
  life4 = createSprite(displayWidth - 168,displayHeight/6 - 20,10,10);
  life4.shapeColor = "red";
  life5 = createSprite(displayWidth - 158,displayHeight/6 - 20,10,10);
  life5.shapeColor = "red";
  life6 = createSprite(displayWidth - 148,displayHeight/6 - 20,10,10);
  life6.shapeColor = "red";
  life7 = createSprite(displayWidth - 138,displayHeight/6 - 20,10,10);
  life7.shapeColor = "red";

  ls1 = createSprite(displayWidth - 198,displayHeight/6 - 40,5,10);
  ls1.shapeColor = "yellow";
  ls2 = createSprite(displayWidth - 188,displayHeight/6 - 40,5,10);
  ls2.shapeColor = "yellow";
  ls3 = createSprite(displayWidth - 178,displayHeight/6 - 40,5,10);
  ls3.shapeColor = "yellow";
  ls4 = createSprite(displayWidth - 168,displayHeight/6 - 40,5,10);
  ls4.shapeColor = "yellow";
  ls5 = createSprite(displayWidth - 158,displayHeight/6 - 40,5,10);
  ls5.shapeColor = "yellow";
  ls6 = createSprite(displayWidth - 148,displayHeight/6 - 40,5,10);
  ls6.shapeColor = "yellow";
  ls7 = createSprite(displayWidth - 138,displayHeight/6 - 40,5,10);
  ls7.shapeColor = "yellow";
  ls8 = createSprite(displayWidth - 128,displayHeight/6 - 40,5,10);
  ls8.shapeColor = "yellow";
  ls9 = createSprite(displayWidth - 118,displayHeight/6 - 40,5,10);
  ls9.shapeColor = "yellow";
  ls10 = createSprite(displayWidth - 108,displayHeight/6 - 40,5,10);
  ls10.shapeColor = "yellow";
  ls11 = createSprite(displayWidth - 98,displayHeight/6 - 40,5,10);
  ls11.shapeColor = "yellow";
  ls12 = createSprite(displayWidth - 88,displayHeight/6 - 40,5,10);
  ls12.shapeColor = "yellow";
  ls13 = createSprite(displayWidth - 78,displayHeight/6 - 40,5,10);
  ls13.shapeColor = "yellow";
  ls14 = createSprite(displayWidth - 68,displayHeight/6 - 40,5,10);
  ls14.shapeColor = "yellow";
  ls15 = createSprite(displayWidth - 198,displayHeight/6 - 40,5,10);
  ls15.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);
  if(bg.x < 150){
    bg.x = bg.width/2;
    
  }
  console.log(lee.y);

  if(bulletGroup.isTouching(zombieGroup)){
    bulletCount++;
    bulletGroup.destroyEach();
    if(bulletCount === 3){
      zombieGroup.destroyEach();
      bulletCount=0;
    }
  }
  if(bulletGroup.isTouching(monsterGroup)){
    bulletCount++;
    bulletGroup.destroyEach();
    if(bulletCount === 5){
      monster.changeAnimation("medical",medicineImg);
      bulletCount=0;

    }
  }

 /* if(zombieGroup.x < lee.x){
    for(i = 0;i <= 75;i=i+5){
      life1 = createSprite(displayWidth -(200-i),displayHeight/6 - 20,10,10);
      life1.shapeColor = "red";
    }
  }*/
  spawnSurvivors();
  
  if(frameCount%1000===0){
    spawnMonster(); 
  }
  else{
    spawnZombies();
  }
  
  
  //keyPressed();
  //keyReleased();
  drawSprites();
} 
/*function keyReleased(){
 if(keyCode === DOWN_ARROW){
   lee.changeAnimation("standing",lee_img);
 }
}*/
function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    shoot();
  }
  if(keyCode === DOWN_ARROW){
    //lee.velocityY = 7;
    if(lee.y<displayHeight-100)
    {
      lee.y = lee.y+9;
      //bg.velocityY = 2;
    }
    
   // lee.changeAnimation("running",running_lee);
  }
  //if(keyup(DOWN_ARROW)){
    //lee.changeAnimation("standing",lee_img);
  //}
  else if(keyCode ===UP_ARROW){
    if(lee.y>displayHeight-300){
      lee.y = lee.y-9;
      //bg.velocityY = -2;
    }
    
  }
  /*else if(keyCode === LEFT_ARROW){
  //lee.velocityX = -7;
    lee.x = lee.x-7;
    bg.velocityX = -2;*/
  }
   
  
function spawnZombies(){

  if(frameCount % 500 === 0){
    zombie = createSprite(displayWidth,300,20,40);
    zombie.addAnimation("running",zombieImg);
    zombie.addAnimation("running1",zombieImg2);
    var r = Math.round(random(1,2));
    if(r === 1){
      zombie.changeAnimation("running",zombieImg);
    }
   else{
    zombie.changeAnimation("running1",zombieImg2);
   }  
    zombie.y=Math.round(random(displayHeight-300,displayHeight-100));
    zombie.scale = 1;
    zombie.velocityX = -2;
    zombie.lifeTime = 400;
    zombieGroup.add(zombie);    
  }
}  
function spawnMonster(){

  if(frameCount % 1000 === 0){
    monster = createSprite(displayWidth,285,20,40);
    monster.addAnimation("running",monsterImg);
    monster.addAnimation("medical",medicineImg);
    monster.scale = 2;

    monster.y=Math.round(random(displayHeight-300,displayHeight-100));
    monster.velocityX = -2;
    monster.lifeTime = 400;
    monsterGroup.add(monster);
  }
}
function spawnSurvivors(){
  if(frameCount % 1300 === 0){
    survivors = createSprite(displayWidth,displayHeight-100,20,40);
    survivors.addImage(survivorsImg);
    survivors.scale = 1.5
    survivors.y=Math.round(random(displayHeight-300,displayHeight-100));
    survivors.velocityX = -2;
    survivorsGroup.add(survivors);
  }
}
function shoot(){
  lee.changeAnimation("gun",gun_lee);
  bullet = createSprite(50,300,10,10);
  bullet.addImage(bulletImg);
  bullet.y=lee.y;
  bullet.scale = 0.1;
  bullet.velocityX = 10;
  bulletGroup.add(bullet);

}
