let coffeeSales = [
  {name: "Espresso", value: 36},
  {name: "Latte", value: 25},
  {name: "Cappuccino", value: 49},
  {name: "Americano", value: 39},
  {name: "Mocha", value: 65},
  {name: "Macchiato", value: 39.8},
  {name: "Flat White", value: 60},
  {name: "Affogato", value: 48}
];

let angles = [];
let lastAngles = [];
let targetAngles = [];
let totalAngle = 0;
let animationSpeed = 0.05;

function setup() {
  createCanvas(600, 400);
  background(255);
  
  colorMode(HSB, 360, 200, 10);
  
  for (let i = 0; i < coffeeSales.length; i++) {
    let n = coffeeSales[i].value;
    angles[i] = 0;
    targetAngles[i] = radians(n);
    lastAngles[i] = totalAngle;
    totalAngle += radians(n);
  }
}

function draw() {
  background(0);
  
  let diameter = 300;
  let lastAngle = 0;
  
  noStroke();
  
  for (let i = 0; i < coffeeSales.length; i++) {
    let n = coffeeSales[i].value;
    let hue = map(i, 0, coffeeSales.length, 0, 360);
    let brightness = map(n, 0, max(coffeeSales.map(coffee => coffee.value)), 50, 100);
    
    fill(hue, 100, brightness);
    
    angles[i] = lerp(angles[i], targetAngles[i], animationSpeed);
    
    let startAngle = lastAngle;
    let endAngle = lastAngle + angles[i];
    
    arc(width / 2, height / 2, diameter, diameter, startAngle, endAngle);
    
    let midAngle = (startAngle + endAngle) / 2;
    let labelX = width / 2 + cos(midAngle) * (diameter / 2) / 1.5;
    let labelY = height / 2 + sin(midAngle) * (diameter / 2) / 1.5;
    
    fill(0);  
    textAlign(CENTER, CENTER);
    textSize(12);
    text(coffeeSales[i].name + "\n" + n, labelX, labelY);
    
    lastAngle = endAngle;
  }
  
  // Add a title to the pie chart
  fill(255);
  textSize(20);
  textAlign(CENTER, TOP);
  text("Coffee Sales Representation", width / 2, 20);
}


