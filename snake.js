var currentScene=0;
frameRate(25);//Partially responsible for speed
var stillPlaying=true;

//This is just the code that draws our Bitmojis
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


//This is the code from the Khan button class, which constructs and creates a button, which switch the starting screen to the game screen
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 64;
    this.height = config.height || 42;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(0, 234, 255);
    rectMode(CORNER);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+5, this.y+this.height/4);
};

//Checks if the mouse is inside the button
Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

//Tells the button what to do if clicked
Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

//Creates the start button
var startButton =new Button({
    x: 329,
    y: 10,
    label: "Start!",
    onClick: function () //Switches the scene (starting screen)
    {
    currentScene=1;
    }
    });
    
//Pause button, copied from Kiryl's frogger game. Pauses the game
var pauseButton = new Button({
    x: 329,
    y: 10,
    label: "Pause",
    onClick: function(){
        if(stillPlaying === true){
            stillPlaying = false;
            startButton.draw();
        }
        else if(stillPlaying === false){
            stillPlaying = true;
        }
    }
});

//Describes mouse clicks
mouseClicked = function() {
    if (currentScene === 1)
    {
        pauseButton.handleMouseClick();
    }
    else if (currentScene === 0){
        startButton.handleMouseClick();
    }
};

//Creates a new object type Snake
var Snake = function(x, y, size, speed){
    this.x =x;
    this.y = y;
    this.size = size; //The size of the snake (the number of tiles it is made of)
    this.tiles = []; //An array to hold all of the tiles
    this.direction = "R"; //Responsible for the direction in which the snake is moving
    this.speed = speed; //The speed of the snake
    for (var i = 0; i < this.size; i++) { //Each tile is its own object with an x and y coordinate. A new tile is added to the array when the size is increased
    this.tiles.push({
        x: this.x - i * 10,
        y: this.y});
    }
};

//Create an instance of the Snake object
var snake = new Snake(100, 60, 6, 8);

//Creates an Apple-type object
var Apple = function(x, y){
    this.x = x;
    this.y = y;
};

//Tells the program how to draw every instance of the Apple-type object
Apple.prototype.draw = function() {
    fill(48, 31, 84);
    imageMode(CENTER);
    image(getImage("avatars/primosaur-seed"), this.x, this.y, 30, 30);
};

//Creates a Level-type object for different levels
var Level = function(applesCount){
    this.apples = [];
    this.applesCount = applesCount;
    this.currentApple = 0;
};


//Generates coordinates for all of the apples
Level.prototype.appleCoordinates = function(){
    for (var i = 0; i< this.applesCount; i++){//Create new apples at random coordinates on the screen
        var apple = new Apple (random(10, 390), random(60, 390));
        this.apples[i] = apple; //Put all the new apples into an array
    }
};

//Draws out the first apple in the array
Level.prototype.draw = function() {
        this.apples[0].draw();
};

//Grow the snake whenever it eats an apple
Snake.prototype.grow = function(){
    var newTile = {   //Creates a new tile, which we then push to the end of the tiles array to increase the size of the snake
        x: this.tiles[this.tiles.length - 1].x,
        y: this.tiles[this.tiles.length - 1].y
    };
    this.tiles.push(newTile);
    this.size++;
};

//generate the level with 20 obstacles, and decide all of their coordinates
var level1 = new Level(20);
level1.appleCoordinates();

//Checks for the snake eating an apple when it gets close to one
Level.prototype.checkForCollision = function(){
    if (snake.tiles[0].x < this.apples[0].x+10 && snake.tiles[0].x > this.apples[0].x-10 &&
        snake.tiles[0].y < this.apples[0].y+10 && snake.tiles[0].y > this.apples[0].y-10){
            snake.grow();
            this.apples.splice(0,1);//Remove the apple from both the array and the screen
    }
    if (level1.apples.length === 0){ //When we have collected all of the apples specified in the level instance, the game ends
        currentScene = 2;}
};


//Draws snake tile by tile based on the x and y coordinates of the tiles in the array
Snake.prototype.draw = function() {
    for (var i = 0; i < this.size; i++){
        if(i === 0){
            fill(13, 76, 128);}
        else {fill(102, 199, 28);}
        rectMode(CENTER);
        rect(this.tiles[i].x, this.tiles[i].y, this.speed, this.speed);
    }
};


//Programs how the snake moves on the screen
Snake.prototype.move = function(){
    //The keys responsible for the change in direction of the snake
    if (keyCode === RIGHT && this.direction !== "L") {
        this.direction = "R";
    } else if (keyCode === LEFT && this.direction !== "R") {
        this.direction = "L";
    } else if (keyCode === UP && this.direction !== "D") {
        this.direction = "U";
    } else if (keyCode === DOWN && this.direction !== "U") {
        this.direction = "D";
    }
    
    //Each tile after the first one adopts the coordinates of the one before it in each loop. The "head" tile is moved by the user. The loop runs from the back of the snake, to prevent the snake from collapsing into one tile. This "moves" the snake except for the head tile
    for (var i = this.tiles.length-1; i > 0; i--){
        this.tiles[i].x = this.tiles[i - 1].x;
    this.tiles[i].y = this.tiles[i - 1].y;
    }
    
    //When the snake (the head tile) reaches the edge of the screen, it moves to the other side of the screen
    if (this.tiles[0].x>410){
        this.tiles[0].x=-10;
    } else if (this.tiles[0].x < -10){
        this.tiles[0].x = 410;
    } else if (this.tiles[0].y > 410){
        this.tiles[0].y=50;
    } else if (this.tiles[0].y < 50){
        this.tiles[0].y = 410;}
    
    //How the snake moves based on direction, i.e. if the snake is supposed to move "up", then only the y-coordinate changes
    if (this.direction === "R") {
    this.tiles[0].x += this.speed;
  } else if (this.direction === "L") {
    this.tiles[0].x -= this.speed;
  } else if (this.direction === "U") {
    this.tiles[0].y -= this.speed;
  } else if (this.direction === "D") {
    this.tiles[0].y += this.speed;
  }
};

//The starting screen. Pretty much the same as in other javascript game assignments
var drawScene1 =function() {
    background(242, 203, 242);
    drawBitmoji1(266, 110, 100);
    textSize(17);
    textAlign(CENTER);
    text("Kiryl Filipau, Nikole DeSimone - Snake",200,76);
    text("Instructions:\nCollect all "+ level1.applesCount+ " apples with the snake.\nUse the navigation keys to move the snake.", 200, 228);
    startButton.draw();
    drawNikoleNeckDown(60,58,56);
    drawNikoleHead(60,58,56);
};

//All of the stuff above put together to make the game screen
var drawScene2 = function() {
    if(stillPlaying){
    background(61, 177, 255);
    snake.draw();
    snake.move();
    fill(0, 255, 225);
    rectMode(CORNER);
    rect(0, 0, 400, 55);
    fill(0, 0, 0);
    text("Apples collected: "+(level1.applesCount-level1.apples.length)+"/"+(level1.applesCount), 100, 20);
    pauseButton.draw();
    level1.draw();
    level1.checkForCollision();
    }
    else if (stillPlaying === false)
    {startButton.draw();}
    
};

var drawScene3 = function(){
    background(61, 177, 255);
    fill(0, 255, 225);
    rectMode(CORNER);
    rect(0, 0, 400, 55);
    textSize(40);
    textAlign(CENTER);
    text("You Won!!!",206, 177);
};



var draw = function() 

{
    if (currentScene === 0){
    drawScene1();}
    else if(currentScene === 1){
    drawScene2();
    } 
    else if (currentScene === 2){
    drawScene3();}
};
