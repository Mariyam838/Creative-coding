let foodData = [
  { food: "Apples", sold: 200, color: '#ff7f0e' },
  { food: "Bananas", sold: 300, color: '#2ca02c' },
  { food: "Oranges", sold: 400, color: '#1f77b4' },
  { food: "Grapes", sold: 450, color: '#d62728' },
  { food: "Strawberries", sold: 500, color: '#9467bd' }
];

let maxSold = 500;
let barWidth = 50;
let animationProgress = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240);
  drawAxes();
  drawBars();
  if (animationProgress < 1) {
    animationProgress += 0.01; // Adjust this value to control animation speed
  }
}

function drawAxes() {
  // Draw x-axis
  stroke(0);
  line(50, height - 50, width - 50, height - 50);
  textAlign(CENTER);
  textSize(12);
  for (let i = 0; i < foodData.length; i++) {
    let x = 100 + i * 100;
    text(foodData[i].food, x + barWidth / 2, height - 30);
  }

  // Draw y-axis
  line(50, height - 50, 50, 50);
  for (let i = 0; i <= maxSold; i += 100) {
    let y = map(i, 0, maxSold, height - 50, 50);
    text(i, 30, y);
  }
  textAlign(RIGHT);
  text('Quantity Sold', 90, 30);
}

function drawBars() {
  for (let i = 0; i < foodData.length; i++) {
    let x = 100 + i * 100;
    let barHeight = map(foodData[i].sold * animationProgress, 0, maxSold, 0, height - 100);
    fill(foodData[i].color);
    rect(x, height - 50 - barHeight, barWidth, barHeight);
  }
}
