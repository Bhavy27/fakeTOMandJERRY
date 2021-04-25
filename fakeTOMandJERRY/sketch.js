var notTom;
var notJerry
var bacimg;



function preload() {
    //load the images here
    bacimg = loadImage("images/garden.png");
    nt1 = loadAnimation("images/cat1");
    nt23 = loadAnimation("images/cat2","images/cat3");
    nt4 = loadAnimation("images/cat4");
    nj1 = loadAnimation("images/mouse1");
    nj23 = loadAnimation("images/mouse2","images/mouse3");
    nj4 = loadAnimation("images/mouse4");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    

    notTom = createSprite(200,200,100,30);
    notTom = addAnimation(nt1);
    notTom.scale = 0.2


    notJerry = createSprite(400,400,20,50);
    notJerry = addAnimation(nj1);
    notJerry.scale = 0.15

}

function draw() {

    background(bacimg);
    //Write condition here to evalute if tom and jerry collide
    if(notTom.x - notjerry.x < (notTom.width - notjerry.width)/2){
        notTom.velocityX=0;
        notTom.addAnimation("tomLastImage", nt4);
        notTom.x =300;
        notTom.scale=0.2;
        notTom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", nj4);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }

    drawSprites();
}


function keyPressed(){
    //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        notTom.velocityX = -5;
        notTom.addAnimation("notTom Running",nt23);
        notTom.changeAnimation("notTom Running");

        notJerry.addAnimation("notJerry Teasing",nj23);
        notjerry.FrameDelay = 25;
        notJerry.changeAnimation("notJerry Teasing");
    }


}
