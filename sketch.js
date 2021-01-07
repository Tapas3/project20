var tom, tom_walkings, tom_stop;
var jerry, jerry_serch, jerry_stop;
var background, backgroundImage;

function preload() {
    //load the images here
    tom_walkings = loadAnimation( "tomFour.png", "tomThree.png", "tomTwo.png");
    tom_stop = loadAnimation("tomOne.png");
    jerry_stop = loadAnimation("jerryOne.png", "jerryThree.png", "jerryFour.png");
    jerry_serch = loadAnimation("jerryTwo.png");
    backgroundImage = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(500,400,50,50);
    tom.addAnimation("stop", tom_stop);
    tom.scale = 0.5;

    jerry = createSprite(400,300,50,50);
    jerry.addAnimation("stop", jerry_stop);
    tom.scale = 0.5;

    background = createSprite(900,700,400,20);
    background.addImage("background", backgroundImage);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < tom.width/2 - jerry.width/2){
        tom.addAnimation("stop", tom_stop);
        tom.changeAnimation("stop");

        jerry.addAnimation("serch", jerry_serch);
        jerry.changeAnimation("serch");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === left_arrow){
      tom.velocityX = -5;
      tom.addAnimation("walkings", tom_walkings);
      tom.changeAnimation("walkings");
  }

}