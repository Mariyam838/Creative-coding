function setup() {
        createCanvas(400, 400);
        background(100);
      }

      function draw() {
        // Head
        fill('yellow');
        ellipse(mouseX, mouseY, 80, 80);

        // Eyes
        fill(0); // Black color for the eyes
        ellipse(mouseX - 15, mouseY - 10, 10, 10);
        ellipse(mouseX + 15, mouseY - 10, 10, 10);

        // Mouth
        fill('red');
        arc(mouseX, mouseY + 10, 30, 20, 0, PI); 
      }