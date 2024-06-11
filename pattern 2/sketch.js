 function setup() {
        createCanvas(400, 400);
        noLoop();  // Stops draw() from looping
      }

      function draw() {
        background(255);
        let cols = 10;
        let rows = 10;
        let spacing = width / cols;

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            let x = i * spacing + spacing / 2;
            let y = j * spacing + spacing / 2;
            let colorValue = map(i + j, 0, cols + rows - 2, 0, 255);
            fill(colorValue);
            ellipse(x, y, spacing * 0.8, spacing * 0.8);
          }
        }
      }