//html5 visible tag
var manImg1, manImg2;
var manImgs = [];
var investMen = [];
var manInvest;
var current;
var manImg;
var bool = true;
var bool2 = true;
var errorMessage = 0;

var bgImage;
var bgVideo;
var pressEnter = 0;
var errorImage;
var errorImage2;
var errorImage3;
var errorImage4;
var fontLucida;
var spacing;
var trashNumber;

var errorRatio;

var hands;
var cutting;
var paris;
var carSlime;
var secondRave;

var imageFile = ['assets/finalError2.png', 'assets/key.png', 'assets/science.png', 'assets/germs.png', 'assets/blueShit.gif', 'assets/gloves.gif', 'assets/goo.gif', 'assets/rotating.gif', 'assets/shinyRock.gif', 'assets/stickyPpl.gif', 'assets/hand.gif', 'assets/cutting.gif', 'assets/carSlime.jpg', 'assets/paris.jpg', 'assets/parisdj.jpg', 'assets/mowing.png'];
var randImageFile;
var imageNum = 0;
var images = [];
var imageNum;
var imageCurrent;

var randWidth;
var randHeight;

var currentErrorNum;
var newVid;

var millisecond;
var preDone;

var soundPlaying = false;
 
function preload(){
  
    //manImg1 = loadImage('assets/Trash1.gif');
  manImg2 = loadImage('assets/Trash.gif');
 // bg = loadImage('assets/2draw.jpg');
 
  fontLucida = loadFont('assets/Lucida_Console_Regular.ttf');
  
  //bgImage = loadImage('assets/deathscreen3.jpg');
  //bgVideo = createVideo('assets/bgVideo2.mov');
  
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#0d02eb');
  frameRate(15);
  sound = loadSound('assets/datatrash_small2.m4a');
   manImg = manImg2
   
   
   
   //sound.play();
   
   errorImage = loadImage('assets/IMAGE1.jpg');
   
   errorImage2 = loadImage('assets/finalError2.png');
  errorImage3 = loadImage('assets/finalError3.png');
   
   
  //errorImage4 = loadImage('assets/POP4.jpg');
  // errorImage.position(-600, -600);
  // errorImage2.position(-600, -600);
  // errorImage3.position(-600, -600);
  // errorImage4.position(-600, -600);
    
  //secondRave.loop();
  //secondRave.position(-600, -600);
  // punchBag = createVideo('assets/punchBag.mp4');
  // //punchBag.loop();
  // punchBag.position(-600, -600);
  //secondRave.hide();
 
  
  
 
  
  
  for (var i=0; i<imageFile.length; i++){
  
    // image1 = new imageCreate();
    // image1.position(100,100);
    //var imagePos = -600;
    randImageFile = int(random(imageFile.length));
    println(randImageFile);
    var createdImage = createImg(imageFile[randImageFile]);
    
    var newImg = new imageCreate(createdImage, -600, -600);
    //createImg(imageFile[randImageFile]);
    
    images.push(newImg);
    // images[1].position(100, 100);    
    // imageCurrent.position(50, 50);
    
    
    
  }
  
  secondRave = createVideo('assets/secondRave.mp4');
  var newVid = new videoCreate(secondRave, -600, -600);
  images.push(newVid);
  punchBag = createVideo('assets/punchBag.mp4');
  //punchBag.loop();
  var newVid2 = new videoCreate(punchBag, -600, -600);
   images.push(newVid2);
    husky = createVideo('assets/husky.mov');
  //punchBag.loop();
  var newVid3 = new videoCreate(husky, -600, -600);
   images.push(newVid3);
   
   preDone = true;
  
  
  
  // images.push(errorImage);
  // images.push(errorImage2);
  // images.push(errorImage3);
  
  
  //hands = createImg('assets/hand.gif');
 // hands.position(-300, -300);
  // cutting = createImg('assets/cutting.gif');
  // cutting.position(-300, -300);
  // carSlime = createImg('assets/carSlime.jpg');
  // carSlime.position(-600, -600);
  // paris = createImg('assets/paris.jpg');
  // paris.position(-600, -600);
  

  
  
  
}

// function preload() {


 
// }

function imageCreate(element, x, y) {
  
  
  
  element.position(x,y);
  
   this.changePos = function(randX, randY) {
    x = randX; //windowWidth * random(1);
    y = randY; //50;
    //windowWidth * random(1), windowHeight * random(1)
    element.position(x,y);
   }
}
   
function videoCreate(element, x, y) {
  
  
  
  element.position(x,y);
  
   this.changePos = function(randX, randY) {
    x = randX; //windowWidth * random(1);
    y = randY; //50;
    //windowWidth * random(1), windowHeight * random(1)
    element.position(x,y);
   }
}
    
    
   

  
  //this.y = -600;


function mousePressed() {
  
 
  
  if (soundPlaying === false){
    sound.play();
    soundPlaying = true;
  }
  
  if (preDone === true & millisecond >= 2000) {

    errorMessage += 1;
    println (errorMessage);

    println("cool!");
    
    
    
    imageNum += 1;
    if (imageNum == images.length){
      imageNum = 0;
    }
    println('image num' + imageNum);
    
    if (errorMessage == images.length + 4) {
      errorMessage = 0;
    }
    
    currentErrorNum +=1;
    
    if (currentErrorNum == images.length + 4){
      currentErrorNum = 0;
    }
    
    randWidth = random(-0.1, 0.8);
    randHeight = random(-0.1, 0.8);
  }
  }

function keyPressed(){
 if (keyCode === ENTER) {
       if (preDone === true && millis == 4000) {
    
     errorMessage += 1;
    println (errorMessage);
    
   
     imageNum += 1;
    if (imageNum == images.length){
      imageNum = 0;
    }
    
    if (errorMessage == images.length + 4) {
      errorMessage = 0;
    }
    
    currentErrorNum +=1;
    
     if (currentErrorNum == images.length + 4){
      currentErrorNum = 0;
    }
    
    randWidth = random(0.1, 0.8);
    randHeight = random(0.1, 0.8);
    
     if (bool2 === true) {
    bool2 = false;
    
    println("YES_VIDEO");
    
  } else {
    println("NO_VIDEO");
    
    pressEnter = 0;

    bool2 = true;
  }
       }
}
    
    for (i = 0; i <= investMen.length; i++) {
    investMen[i].clear();
    
      }
}

//***-------------DRAW FUNCTION--------------*** START

function draw() {
  imageMode(CENTER);
  background('#0d02eb');
  //text('width' + windowWidth + 'height' +  windowHeight, 300, 90);
   fill(255);
    noStroke();
  if (windowWidth < 1000){
    textSize(32);
    spacing = 30;
    trashNumber = 65;
    errorRatio = 3;
    
  } else {
    textSize(18);
    spacing = 20;
    trashNumber = 50;
    errorRatio = 1;
  }
  textStyle();
  textFont(fontLucida);
  var dataHeight = 0;
  if (preDone === true){
    
    millisecond = millis();
    
  }
  
  //text(millisecond, windowWidth - 250, 50);
  var timePassed = millisecond;
  var newTime = 3000;
  text (nfc(timePassed, 4), windowWidth - 150, 40);
  
  for (i = 0; i < trashNumber; i ++) {
    
    if (timePassed >= newTime ){
    //text ('MATCH!', windowWidth - 600, windowHeight - 200)
    text('DATATRASH',windowWidth * 0.1 ,dataHeight);
    dataHeight += spacing;
    
      newTime += 50;
      i +=1;
      }
    }
    if (timePassed >= 1500) {
        text('Unknown error__________________________//', windowWidth * 0.1, dataHeight + spacing);
        newTime += 50
      //   var clickCol = 255;
      //   var fillBool = true;
      //   for (i = 0; i < 30; i ++) {
      //   if (timePassed >= newTime ){
      //       text('Click or press enter to continue', windowWidth * 0.1, dataHeight + spacing + 30 );
      //       if (fillBool === true) {
      //         fill('#0d02eb');
      //         fillBool = false;
      //         } else {
      //           //println("GONE");
      //           fill(255);
      //           fillBool = true;
      //           }
                
      //     clickCol = '#0d02eb';
      //     newTime += 200;
      //     i +=1;
      //     }
      // }
   }
   
  // if (pressEnter == 1){
  //   background(0);
  //   bgVideo.play();
  //   image(bgVideo, width / 2, height / 2);
    
  // }
  if (millis() > 1000){
    
    var clickCol = 255;
        var fillBool = true;
        for (i = 0; i < 30; i ++) {
        if (timePassed >= newTime ){
            text('Click or press enter to continue', windowWidth * 0.1, dataHeight + spacing + 30 );
             if (fillBool === true) {
               fill('#0d02eb');
               fillBool = false;
              } else {
                //println("GONE");
                fill(255);
                fillBool = true;
                }
                
          clickCol = '#0d02eb';
          newTime += 200;
          i +=1;
          }
      }
    
  
  
  
  if (errorMessage >= 1){
    
    //console.log('LOG!!!');
    image(errorImage2, windowWidth/2, windowHeight/2, errorImage.width * errorRatio, errorImage.height * errorRatio);
  } if (errorMessage >= 2) {
    image(errorImage2, windowWidth*0.47, windowHeight*0.45, errorImage2.width * errorRatio, errorImage2.height * errorRatio);
  }if (errorMessage >= 3) {
    image(errorImage3, windowWidth*0.53, windowHeight*0.33, errorImage3.width * errorRatio, errorImage3.height * errorRatio);
    
    }if (errorMessage == 4) {
      
      currentErrorNum = 4;
      images[imageNum].changePos(windowWidth*0.53, windowHeight*0.53);
    
    }if (errorMessage == currentErrorNum) {
      
     randX = windowWidth * randWidth;
     randY = windowHeight * randHeight;
     images[imageNum].changePos(randX, randY);
     
     if (errorMessage == 16) {
       secondRave.play();
       
     }
     
     if (errorMessage == 17) {
       secondRave.pause()
       punchBag.play();
       
     }
      if (errorMessage == 18) {
       punchBag.pause();
       husky.play();
       
     }
     
      if (errorMessage == 19) {
       husky.pause();
       
     }
    }
     
      
    // }if (errorMessage == 6) {
      
    //   randX = windowWidth * randWidth;
    // randY = windowHeight * randHeight;
    //   images[imageNum].changePos(randX, randY);
      
    
    // }if (errorMessage == 7) {
     
    //   randX = windowWidth * randWidth;
    // randY = windowHeight * randHeight;
    //   images[imageNum].changePos(randX, randY);
      
  
    // }if (errorMessage == 8) {
      
    //   paris.position(windowWidth * 0.1, windowHeight * 0.25);
      
    // }if (errorMessage == 9) {
    //   secondRave.play();
    //   secondRave.position( windowWidth * 0.7, windowHeight * 0.1);
      
    // }
    
    // if (errorMessage >= 10) {
    //   secondRave.pause();
    //   punchBag.play();
    //   punchBag.position( windowWidth * 0.3, height * 0.4);
      
    // }

  var xPos = mouseX;
  var yPos = mouseY;
  investMen.push(new investMan(xPos, yPos, manImg));

for (i = 0; i < investMen.length; i++) {
    
    investMen[i].display();
   
  }
}
}

function investMan(x, y, img) {
  this.x = x;
  this.y = y;
  this.img = img;

  // this.bool = true;

  this.update = function() {
    this.x = mouseX;
    this.y = mouseY;
  }
  
  this.clear = function() {
    for (i = 0; i < investMen.length;i++){
      investMen.pop(investMen[i]);
    }
  }

  this.display = function() {
    imageMode(CENTER)
    image(this.img, this.x, this.y);
    
  }
}

 function windowResized(){
        resizeCanvas(windowWidth, windowHeight);
        //bgVideo.size(windowHeight*2, 300);
      }
