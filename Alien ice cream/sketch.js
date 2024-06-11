function setup() {
  createCanvas(400, 600);
}
function draw() {
  background(255);
  
  //Cone
  fill('#d4a373')
  triangle(200,600,125,400,275,400);
  
  //Scoop
  fill(255, 204, 0);//yellow scoop
  ellipse(200,350,110,100)
  
  fill('magenta'); //magenta scoop
  ellipse(200,250,90,90);
  
  fill('#0f0'); // green scoop
  ellipse(200,170,60,60);  
}
