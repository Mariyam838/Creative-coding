 function setup() {
        createCanvas(400, 400);
        noLoop();
      }

      function draw() {
        background(0);
        let cols = 8;
        let rows = 8;
        let spacing = width / cols;

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            let x = i * spacing + spacing / 2;
            let y = j * spacing + spacing / 2;

            // First layer - outer circle
            fill(100 + i * 20, 100 + j * 20, 200);
            noStroke();
            ellipse(x, y, spacing * 0.8);

            // Second layer - middle square
            fill(200, 100 + i * 20, 100 + j * 20);
            rectMode(CENTER);
            square(x, y, spacing * 0.6);

            // Third layer - inner circle
            fill(255);
            ellipse(x, y, spacing * 0.4);
          }
        }
      }