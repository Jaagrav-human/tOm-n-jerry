var tom, tImage,tWalk,tWalk2,tWalk3;
var jerry, jImage,jWalk,jWalk2,jWalk3;
var bg, bgImage;

function preload() {
    //load the images here
    tImage.loadImage('cat1.png');
    jImage.loadImage('mouse1.png');
    bgImage.loadImage('garden.png');

    tWalk = loadAnimation("cat2.png");
    tWalk2 = loadAnimation("cat3.png");
    tWalk3 = loadAnimation("cat4.png");

    jWalk = loadAnimation("mouse2.png");
    jWalk2 = loadAnimation("mouse3.png");
    jWalk3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,400,20,20);
    bg.addImage(bgImage);

    tom = createSprite(900,600,20,20);
    tom.addImage(tImage);
    tom.addAnimation('step1',cat2)

    jerry = createSprite(100,600,20,20);
    jerry.addImage(jImage);
}

function draw() {

    background(200);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    
   if(keyDown = 'space'){
     tom = loadAnimation("tWalk.tWalk2,tWalk3");
     jerry = loadAnimation("jWalk,jWalk2,jWalk3");
    
   }

}
