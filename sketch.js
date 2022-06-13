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
  //background(255);
  //text('tap here to play', 10, 20);
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}

//draw loops forever
function draw(){
  background(255);
  //a customise shape for mouse
  //noCursor();
  //noStroke();
  //fill('black');
  //circle(mouseX, mouseY,5);
  
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
  
  //title subtitle
  //push();
  //translate(width/2,height-80);
  //noStroke();
  //fill('white')
  //textFont('Arial');
  //textSize(25);
  //textAlign(CENTER, CENTER);
  //text('Coded By Yaz',0,0);
  //textSize(20);
  //text('Artist & Designer',0,20);
  //pop();
  
  //boarder
  //push();
  //translate(width/2,height/2);
  //noFill();
  //stroke('black');
  //strokeWeight(3);
  //rectMode(CENTER);
  //rect(0, 0, rectSize, rectSize);
  
  //random noise as background
 
  //stroke(152,251,152);
  //strokeWeight(2);
  //for(let i =0; i<ptNum; i++){ 
  //point(random(-rectSize / 2, rectSize / 2), random(-rectSize / 2, rectSize / 2));
  //}  
  //pop();
}