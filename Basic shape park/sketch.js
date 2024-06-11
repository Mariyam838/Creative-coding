function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220,225,200);
  
  //Sun
  fill(225,225,0);
  ellipse(550,50,80,80);
  
  //Tree
  fill(139,69,19);//Brown color tree trunk
  rect(100,300,30,100);
  rect(400,250,40,150);
  
  fill(34,139,34)//Green Leaves
  ellipse(115,250,120,120);
  ellipse(430,200,120,120);
  
  //People
  fill(255,204,153);//skin color for people
  ellipse(200,300,50,50);//head
  ellipse(300,300,50,50);
  
  fill(0,0,225);//Blue clothes
  rect(185,300,30,80);
  rect(285,300,30,80);
  
  fill(0);//black hair
  rect(180,280,40,20);
  rect(280,280,40,20)
  
  //Benches
  fill(139,69,19);
  rect(100,340,150,20);
  rect(300,340,150,20);
  
  //Pathway
  fill(225);
  rect(0,360,600,40); 
}