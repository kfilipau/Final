var currentScene=0;
frameRate(30);
var stillPlaying=true;
var score=0;
var startTime;

var drawBitmoji1 = function(bitmojiX, bitmojiY, bitmojiHeight)
{
    //Head
    noStroke();
    fill(255,224,189);
    ellipse(bitmojiX, bitmojiY, 50*bitmojiHeight/150, 50*bitmojiHeight/150);
    
    //Eyes
    stroke(0, 0, 0);
    strokeWeight(1);
    rect(bitmojiX-(19)*bitmojiHeight/150, bitmojiY-(12)*bitmojiHeight/150, 14*bitmojiHeight/150, 6*bitmojiHeight/150);
    rect(bitmojiX+(4)*bitmojiHeight/150, bitmojiY-(12)*bitmojiHeight/150, 14*bitmojiHeight/150, 6*bitmojiHeight/150);
    
    line(bitmojiX-(5)*bitmojiHeight/150, bitmojiY-(9)*bitmojiHeight/150, bitmojiX+(4)*bitmojiHeight/150, bitmojiY-(9)*bitmojiHeight/150);
    noStroke();
    fill(4, 0, 255);
    ellipse(bitmojiX-(12)*bitmojiHeight/150, bitmojiY-(9)*bitmojiHeight/150, (6)*bitmojiHeight/150, 6*bitmojiHeight/150);
    ellipse(bitmojiX+(12)*bitmojiHeight/150, bitmojiY-(9)*bitmojiHeight/150, 6*bitmojiHeight/150, 6*bitmojiHeight/150);
    
    //Nose and Mouth
    noStroke();
    fill(255,224,189);
    stroke(0, 0, 0);
    arc(bitmojiX, bitmojiY+3*bitmojiHeight/150, 8*bitmojiHeight/150, 6*bitmojiHeight/150, 0, 180);
    line(bitmojiX-4*bitmojiHeight/150, bitmojiY+3*bitmojiHeight/150, bitmojiX, bitmojiY-3*bitmojiHeight/150);
    line(bitmojiX, bitmojiY-3*bitmojiHeight/150, bitmojiX+4*bitmojiHeight/150, bitmojiY+3*bitmojiHeight/150);
    
    fill(255, 0, 0);
    arc(bitmojiX, bitmojiY+11*bitmojiHeight/150, 20*bitmojiHeight/150, 10*bitmojiHeight/150, 0, 180);
    
    //Hat
    noStroke();
    fill(224, 211, 117);
    arc(bitmojiX, bitmojiY-13*bitmojiHeight/150, 44*bitmojiHeight/150, 40*bitmojiHeight/150, 180, 360);
    
    stroke(224, 211, 117);
    strokeWeight(5*bitmojiHeight/150);
    line(bitmojiX-20*bitmojiHeight/150, bitmojiY-15*bitmojiHeight/150, bitmojiX+20*bitmojiHeight/150, bitmojiY-15*bitmojiHeight/150);
    
    strokeWeight(2*bitmojiHeight/150);
    stroke(133, 94, 17);
    line(bitmojiX-20*bitmojiHeight/150, bitmojiY-18*bitmojiHeight/150, bitmojiX+20*bitmojiHeight/150, bitmojiY-18*bitmojiHeight/150);
    line(bitmojiX-18*bitmojiHeight/150, bitmojiY-23*bitmojiHeight/150, bitmojiX+18*bitmojiHeight/150, bitmojiY-23*bitmojiHeight/150);
    line(bitmojiX-13*bitmojiHeight/150, bitmojiY-28*bitmojiHeight/150, bitmojiX+13*bitmojiHeight/150, bitmojiY-28*bitmojiHeight/150);
    
    //Shirt
    noStroke();
    fill(75, 117, 51);
    rect(bitmojiX-32*bitmojiHeight/150, bitmojiY+37*bitmojiHeight/150, 64*bitmojiHeight/150, 64*bitmojiHeight/150);
    quad(bitmojiX-31*bitmojiHeight/150, bitmojiY+37*bitmojiHeight/150, bitmojiX-31*bitmojiHeight/150, bitmojiY+57*bitmojiHeight/150, bitmojiX-54*bitmojiHeight/150, bitmojiY+112*bitmojiHeight/150, bitmojiX-64*bitmojiHeight/150, bitmojiY+112*bitmojiHeight/150);
    quad(bitmojiX+31*bitmojiHeight/150, bitmojiY+37*bitmojiHeight/150, bitmojiX+31*bitmojiHeight/150, bitmojiY+57*bitmojiHeight/150, bitmojiX+54*bitmojiHeight/150, bitmojiY+112*bitmojiHeight/150, bitmojiX+64*bitmojiHeight/150, bitmojiY+112*bitmojiHeight/150);
    
    fill(255, 224, 189);
    rect(bitmojiX-10*bitmojiHeight/150, bitmojiY+23*bitmojiHeight/150, 20*bitmojiHeight/150, 15*bitmojiHeight/150);
    arc(bitmojiX, bitmojiY+37*bitmojiHeight/150, 20*bitmojiHeight/150, 14*bitmojiHeight/150, 0, 180);
    arc(bitmojiX-59*bitmojiHeight/150, bitmojiY+112*bitmojiHeight/150, 10*bitmojiHeight/150, 10*bitmojiHeight/150, 0, 180);
    arc(bitmojiX+59*bitmojiHeight/150, bitmojiY+112*bitmojiHeight/150, 10*bitmojiHeight/150, 10*bitmojiHeight/150, 0, 180);
    
    stroke(255, 255, 255);
    line(bitmojiX-32*bitmojiHeight/150, bitmojiY+53*bitmojiHeight/150, bitmojiX+32*bitmojiHeight/150, bitmojiY+53*bitmojiHeight/150);
    line(bitmojiX-32*bitmojiHeight/150, bitmojiY+69*bitmojiHeight/150, bitmojiX+32*bitmojiHeight/150, bitmojiY+69*bitmojiHeight/150);
    line(bitmojiX-32*bitmojiHeight/150, bitmojiY+85*bitmojiHeight/150, bitmojiX+32*bitmojiHeight/150, bitmojiY+85*bitmojiHeight/150);
    
    //Initials
    stroke(47, 58, 112);
    strokeWeight(4);
    line(bitmojiX-24*bitmojiHeight/150, bitmojiY+69*bitmojiHeight/150, bitmojiX-8*bitmojiHeight/150, bitmojiY+53*bitmojiHeight/150);
    line(bitmojiX-24*bitmojiHeight/150, bitmojiY+69*bitmojiHeight/150, bitmojiX-8*bitmojiHeight/150, bitmojiY+85*bitmojiHeight/150);
    line(bitmojiX-24*bitmojiHeight/150, bitmojiY+53*bitmojiHeight/150, bitmojiX-24*bitmojiHeight/150, bitmojiY+85*bitmojiHeight/150);
    
    line(bitmojiX+8*bitmojiHeight/150, bitmojiY+85*bitmojiHeight/150, bitmojiX+8*bitmojiHeight/150, bitmojiY+53*bitmojiHeight/150);
    line(bitmojiX+8*bitmojiHeight/150, bitmojiY+53*bitmojiHeight/150, bitmojiX+24*bitmojiHeight/150, bitmojiY+53*bitmojiHeight/150);
    line(bitmojiX+8*bitmojiHeight/150, bitmojiY+69*bitmojiHeight/150, bitmojiX+16*bitmojiHeight/150, bitmojiY+69*bitmojiHeight/150);
    strokeWeight(1);
    fill(0);
};


var drawNikoleNeckDown=function(x,y,bitmojiHeight) 
 
 {
 
 fill(128,68, 68);//fill for hair
rect(x+(bitmojiHeight/100*59),y+(bitmojiHeight/100*82),bitmojiHeight/100*83,bitmojiHeight/100*94);//bottom of hair

fill(128, 68, 68);// fill for hair
ellipse(x+(bitmojiHeight/100*100),y+(bitmojiHeight/100*88),bitmojiHeight/100*83,bitmojiHeight/100*92);//top of hair 
  
  stroke(0, 0, 0);
fill(255, 224, 189);//fill for neck
rect(x+(bitmojiHeight/100*83),y+(bitmojiHeight/100*124),bitmojiHeight/100*34,bitmojiHeight/100*52);//neck 

fill(159, 198, 245);//fill for shirt 
rect(x+(bitmojiHeight/100*50),y+(bitmojiHeight/100*176),bitmojiHeight/100*104,bitmojiHeight/100*33);//shirt 

text("ND",x+(bitmojiHeight/100*91),y+(bitmojiHeight/100*195));//letters "ND"

};



var drawNikoleHead= function (x,y,bitmojiHeight)
{
  stroke(3, 3, 3);

fill(255,224,189);//fill for head 
ellipse(x+(bitmojiHeight/100*100),y+(bitmojiHeight/100*100),bitmojiHeight/100*83,bitmojiHeight/100*100);//head

fill (135, 161, 240);//fill for eye color
ellipse(x+(bitmojiHeight/100*90),y+(bitmojiHeight/100*100),bitmojiHeight/100*6,bitmojiHeight/100*4);//left eye
ellipse(x+(bitmojiHeight/100*117),(y+bitmojiHeight/100*100),bitmojiHeight/100*6,bitmojiHeight/100*4);//right eye

fill(0, 0, 0);//fill for nose
triangle(x+(bitmojiHeight/100*102),y+(bitmojiHeight/100*118),x+(bitmojiHeight/100*100.9),y+(bitmojiHeight/100*105.2),x+(bitmojiHeight/100*103),y+(bitmojiHeight/100*117));//nose

fill(128,68, 68);
arc(x+(bitmojiHeight/100*82),y+(bitmojiHeight/100*91),bitmojiHeight/100*26,bitmojiHeight/100*5,210,338);//left eyebrow
arc(x+(bitmojiHeight/100*118),y+(bitmojiHeight/100*91),bitmojiHeight/100*27,bitmojiHeight/100*5,214,372);//right eyebrow

fill(255,255,255);//white fill for teeth
arc(x+bitmojiHeight/100*102,y+bitmojiHeight/100*127,bitmojiHeight/100*30,bitmojiHeight/100*13,1,180);//mouth
};



var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(159, 198, 245);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(21);
    textAlign(CENTER, TOP);
    text(this.label, this.x+75, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

var startbutton =new Button({
    x: 128,
    y: 324,
    label: "Start!",
    onClick: function () 
    {
    currentScene=1;
    startTime=millis();
    }
    });


var drawScene1 =function() 
{
   
    background(242, 203, 242);
    drawBitmoji1(212, 110, 100);
    textSize(17);
    textAlign(CENTER);
    text("Kiryl Filipau, Nikole DeSimone - Memory Game",200,76);
    text("Instructions:\nTurn over all the matching tiles.\nThe matches come in sets of 4. Good Luck!", 200, 200);
    startbutton.draw();
    drawNikoleNeckDown(60,58,56);
    drawNikoleHead(60,58,56);
};

mouseClicked = function() {
    if (currentScene === 0){
       startbutton.handleMouseClick();}
};

var drawScene2 = function() {
    background(242, 203, 242);
};

var draw = function() 

{
    if (currentScene === 0){
    drawScene1();}
    else if(currentScene === 1){
        drawScene2();
    }
};
var snake = function(x,y,snakeWidth, speed, score) {
    this.x = x;
    this.y = y;
    this.snakeWidth=snakeWidth;
    this.speed=speed;
    this.score=score;
  };


if (scene===2){
draw = function() {
     background (255,255,255);
     text("Score: " + numTries, 300,18);
     image(getImage("avatars/primosaur-sapling", mouseX,mouseY,width,30);
};


if (score===10) {
    speed++;
    width++;
}
