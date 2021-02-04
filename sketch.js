var ballon

var bx = 400
var by = 0

function preload(){
  back = loadImage("bg.png")
  baloon = loadImage("balo.png")
}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(back);  
  

  if(keyDown(LEFT_ARROW)){
    bx += -10
  }
  else if(keyDown(RIGHT_ARROW)){
    bx += 10
  }
  else if(keyDown(UP_ARROW)){
    by += -10
  }
  else if(keyDown(DOWN_ARROW)){
    by += 10
  }

  image(baloon, bx, by, 200, 300)

}