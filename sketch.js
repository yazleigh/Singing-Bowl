//author:YazLeigh
//instruction to interact
//move mouse to the left - rotate counterclockwise
//move mouse to the right - rotate clockwise
//press mouse to play music

let gap = 5;
let cirNum = 120;
let cirSize = 50;
let angle = 0;
let ptNum = 50;
let rectSize = 500;
let mySound;

function preload() {
  mySound = loadSound('bowl.mp3');
}

function setup(){
  createCanvas(800, 800);
  angleMode(degrees);
  let cnv = createCanvas(800, 800);
  cnv.mousePressed(canvasPressed);
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}

function draw(){
  background(255);
  
  //main graph
  push();
  translate(width/2, height/2);
  rotate(angle);
  angle = angle+map(mouseX,0,width,-0.1,0.1);
  noFill();
  stroke('black');
  strokeWeight(2);
  //for loop:
  //1, where to start, 
  //2, where to end, 
  //3, how much it increments each time
  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i,cirSize + gap * i,angle*i,360-angle/2);
  }
  pop();
 
}
