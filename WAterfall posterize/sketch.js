var img;
function preload(){
  img= loadImage("Waterfall.jpg");
}


function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  background(220);
  image(img,0,0,width/2,height/2);
  var v= map(mouseX,0,width,2,20);
  filter(POSTERIZE,v);
}