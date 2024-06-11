function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('rgba(100%,0%,100%,0.5)');
  
  //Rectangle
  fill(225,0,0);
  rectMode(CENTER)
  rect(width/2,height/2,200,300);
  
  //ellipse
  fill(0,225,0)
  ellipse(width/2,height/2,200,210);
  
  //triangle
  fill(0,0,225)
   triangle(100,250,200,120,300,250);

}
