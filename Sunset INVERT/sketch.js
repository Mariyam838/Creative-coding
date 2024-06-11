var img;
function preload(){
  img= loadImage("Sunset.jpg");
}
  
  function setup() {
  createCanvas(800, 800);
    background(0);
}

function draw() {
  background(220);
  image(img, 0, 0, width/2, height/2);
  //tint(255,0,0)
  filter(INVERT);
}