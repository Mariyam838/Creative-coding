function setup() {
  createCanvas(400, 400);
  noLoop();  
}

function draw() {
  background(0);
  let cols = 10;
  let rows = 10;
  let spacing = width / cols;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * spacing + spacing / 2;
      let y = j * spacing + spacing / 2;
      
      let colorR = map(i, 0, cols - 3, 0, 255);
      let colorG = map(j, 0, rows - 2, 0, 255);
      let colorB = map(i + j, 0, cols + rows - 2, 255, 0);
      
      fill(colorR, colorG, colorB);
      noStroke();
      
      let shapeType = (i + j) % 3;
      if (shapeType === 0) {
        ellipse(x, y, spacing * 0.8, spacing * 0.8);
      } else if (shapeType === 1) {
        rect(x - spacing * 0.4, y - spacing * 0.4, spacing * 0.8, spacing * 0.8);
      } else {
        triangle(x - spacing * 0.4, y + spacing * 0.4, x, y - spacing * 0.4, x + spacing * 0.4, y + spacing * 0.4);
      }
    }
  }
}
