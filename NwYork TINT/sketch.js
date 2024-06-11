var img;
function preload(){
  img= loadImage("NewYork.jpg");
}


function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  background(220);
  tint(255,0,0);
  image(img,0,0,width/2,height/2);
  noTint();
  image(img,0,height/2,width/2,height/2);
}