var img;
function preload(){
  img= loadImage('castle.jpg');
}

function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  background(0);
  image(img, 10, 20, width/1.5, height/2);
  var v= map(mouseX, 0, width,0,1);
  filter(THRESHOLD,v);
}