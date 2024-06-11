function setup() {
  createCanvas(550, 400);
}

function draw() {
  background(220);
  
  var rectSize=40;
  
  for (var x = 0; x< width; x += rectSize){
    
  for (var y = 0; y< height; y += rectSize){
    
    fill('yellow');
    rect(x,y, rectSize*1.2, rectSize*1.2);
    fill('magenta');
    rect(x,y, rectSize*0.8, rectSize*0.8);
    fill('lightblue');
    rect(x,y, rectSize*0.3, rectSize*0.3);
  }
  }
}