
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



function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#0d02eb');
  
  
  
 
 
  
  frameRate(15);
   manImg = manImg2
  
   
 
}



function preload() {

  manImg1 = loadImage('assets/Trash1.gif');
  manImg2 = loadImage('assets/Trash.gif');
  bg = loadImage('assets/2draw.jpg');
  
  bgImage = loadImage('assets/deathscreen3.jpg');
  bgVideo = createVideo('assets/bgVideo2.mov');
  errorImage = loadImage('assets/POP1.jpg');
  errorImage2 = loadImage('assets/POP2.jpg');
  errorImage3 = loadImage('assets/POP3.jpg');
  errorImage4 = loadImage('assets/POP4.jpg');
  
  fontLucida = loadFont('assets/Lucida_Console_Regular.ttf');
  

//   grow = createVideo('assets/zoom_1.mp4');

//   grow.loop();
//   grow.hide();
  
  bgVideo.loop();
  bgVideo.hide();
  
}



function mousePressed() {
  
  
   
  // if (bool === true) {
  //   manImg = manImg1;
    
    
    
    // if (errorMessage == 1){
    
    // image(errorImage, windowWidth/2, windowHeight/2);
    
    // } else if (errorMessage == 2){
      
    //   image(errorImage2, windowWidth/2, windowHeight/2);
    // }
    
    errorMessage += 1;
    println (errorMessage);
    

   // bool = false;
    
    println("cool!");
  }
  // } else {
  //   println("notcool...");
    
  //   manImg = manImg2;
    
   

  //   bool = true;
  // }

//}

function keyPressed(){
 
  
  
  
  if (keyCode === ENTER) {
        var fs = true;
    
     errorMessage += 1;
    println (errorMessage);
    
     if (bool2 === true) {
   // pressEnter = 1;

    bool2 = false;
    
    println("YES_VIDEO");
    
  } else {
    println("NO_VIDEO");
    
    pressEnter = 0;

    bool2 = true;
  }
}
    
  
    
    for (i = 0; i <= investMen.length; i++) {
    
    investMen[i].clear();
    
      }
}

function draw() {
  
   imageMode(CENTER);
  
  background('#0d02eb');
  text('width' + windowWidth + 'height' +  windowHeight, 300, 90);
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
  
  
  var millisecond = millis();
  var newTime = 1000;
  text(millisecond, windowWidth - 250, 50);
  var timePassed = millisecond;
  //text (timePassed, windowWidth - 400, windowHeight - 200);
  
  for (i = 0; i < trashNumber; i ++) {
    
    if (timePassed >= newTime ){
    //text ('MATCH!', windowWidth - 600, windowHeight - 200)
    text('DATATRASH',windowWidth * 0.1 ,dataHeight);
    dataHeight += spacing;
    
      newTime += 50;
      i +=1;
      }
    }
    if (timePassed >= 2500) {
        text('Unknown error__________________________//', windowWidth * 0.1, dataHeight + spacing);
        
        newTime += 50
        var clickCol = 255;
        var fillBool = true;
        
         for (i = 0; i < 30; i ++) {
    
          if (timePassed >= newTime ){
            text('Click or press enter to continue', windowWidth * 0.1, dataHeight + spacing + 30 );
             if (fillBool === true) {
               //println("THERE");
               
               fill('#0d02eb');
               
               //clickCol = '#0d02eb';
               fillBool = false;
              } else {
                //println("GONE");
                fill(255);
                
                //rect(90, dataHeight + spacing, 400, 30);
                fillBool = true;
                }
            
          //fill(clickCol);
          //text('Click or press enter', 90, dataHeight + 50 );
          
          
          
          clickCol = '#0d02eb';
    
          newTime += 200;
          i +=1;
      
      
          }
      
      }
  
        
   }
  
  
  //createCanvas(windowWidth, windowHeight);
  //imageMode(CENTER);
  //background('#0d02eb');
  //image(bgImage, windowWidth/2, windowHeight/2, windowWidth, windowHeight  );
  if (pressEnter == 1){
    background(0);
    bgVideo.play();
    image(bgVideo, width / 2, height / 2);
    
  }
  if (errorMessage >= 1){
    image(errorImage, windowWidth/2, windowHeight/2, errorImage.width * errorRatio, errorImage.height * errorRatio);
  } if (errorMessage >= 2) {
    image(errorImage2, windowWidth*0.45, windowHeight*0.45, errorImage2.width * errorRatio, errorImage2.height * errorRatio);
  }if (errorMessage >= 3) {
    image(errorImage3, windowWidth*0.3, windowHeight*0.6, errorImage3.width * errorRatio, errorImage3.height * errorRatio);
    }if (errorMessage >= 4) {
    image(errorImage4, windowWidth*0.7, windowHeight*0.7, errorImage4.width * errorRatio, errorImage4.height * errorRatio);
      
    }if (errorMessage >= 5) {
    //background(0);
    
    bgVideo.play();
    image(bgVideo, width * 0.4, height * 0.4);
    
    }if (errorMessage >= 6) {
    //background(0);
    //bgVideo.play();
    //bgVideo.size(bgVideo.width*0.2, bgVideo.height*0.2);
    image(bgVideo, width * 0.7, height * 0.7);
    
}if (errorMessage >= 7) {
    //background(0);
    //bgVideo.play();
    //bgVideo.size(bgVideo.width*0.4, bgVideo.height*0.4);
    image(bgVideo, width * 0.3, height * 0.5);}
  
    
    
    
    
    
  
  
 
  //println ('mousex:'+mouseX+'mouseY:'+mouseY);
  

  var xPos = mouseX;
  var yPos = mouseY;
  investMen.push(new investMan(xPos, yPos, manImg));




  // if (mouseX > 900 && mouseY > 100) {
  //   //image(grow, width / 2, height / 2);
  //   //grow.play();
  // } else if (mouseX < 100 && mouseY > 100) {
  //   //background(255);
  //   //grow.pause();
    
  //   image(bgImage, windowWidth/2, windowHeight/2,windowWidth, windowHeight  );
  // }
  
  

for (i = 0; i < investMen.length; i++) {
    
    investMen[i].display();
   
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
