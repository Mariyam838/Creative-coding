var img;
function preload(){
  img= loadImage('lake.jpg');
}

function setup(){
  createCanvas(800,800);
  background(0);
}
function draw(){
  background(0);
  image(img,0,0,width/2, height/2);
  //tint(255,0,0);
  filter(BLUR,2);
  
}