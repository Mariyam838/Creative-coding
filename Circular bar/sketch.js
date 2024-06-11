var data;
var words = [];
var values = [];
var innerCircle = 50;

function preload() {
  data = loadTable("fruits.csv", "csv", "header");
}

function setup() {
  createCanvas(700, 500);
  noStroke();
  background(255);
  colorMode(HSB, 360, 100, 100);

  if (data) {
    for (var i = 0; i < data.getRowCount(); i++) {
      words.push(data.getString(i, 0)); 
      values.push(data.getNum(i, 1)); 
    }
    drawCircularBars();
  } else {
    console.error("Data could not be loaded.");
  }
}

function drawCircularBars() {
  var maxVal = max(values);
  var centerX = width / 2;
  var centerY = height / 2;
  var radius = 200;

  for (var i = 0; i < values.length; i++) {
    var n = values[i];
    var angle = map(i, 0, values.length, 0, TWO_PI); 
    var barHeight = map(n, 0, maxVal, 0, radius - innerCircle); 
    var c = map(n, 0, maxVal, 0, 360); 

    fill(c, 80, 90);
    var barX = centerX + cos(angle) * (innerCircle + barHeight / 2);
    var barY = centerY + sin(angle) * (innerCircle + barHeight / 2);

    push();
    translate(barX, barY);
    rotate(angle + HALF_PI);
    rectMode(CENTER);
    rect(0, 0, 20, barHeight); 
    pop();

    fill(0);
    textSize(12);
    textAlign(CENTER, CENTER);
    var labelX = centerX + cos(angle) * (innerCircle + barHeight + 20);
    var labelY = centerY + sin(angle) * (innerCircle + barHeight + 20);
    text(words[i], labelX, labelY); 
  }
}



