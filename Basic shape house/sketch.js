function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //Draw house bottom
  fill(225,0,0);
  rect(100,200,200,150);
  
  //Roof
  fill(0,0,225);
  triangle(100,200,300,200,200,100);
  
  //Door
  fill(150,75,0);
  rect(180,250,40,100);
  
  //Window
  fill(225);
  rect(130,230,40,40);
  rect(230,230,40,40);
  
}