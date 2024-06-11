function setup() {
        createCanvas(400, 400);
        background(100);
      }

      function draw() {
        let size = random(20, 50);
        let offsetX = random(-20, 20);
        let offsetY = random(-20, 20);
        let shapes = ['circle', 'ellipse', 'rect'];
        let shape = random(shapes);

        let colors = ['blue', 'orange', 'red', 'green', 'purple', 'yellow'];
        fill(random(colors));

        if (shape == 'circle') {
          circle(mouseX + offsetX, mouseY + offsetY, size);
        } else if (shape == 'ellipse') {
          ellipse(mouseX + offsetX, mouseY + offsetY, size, size * 0.6);
        } else if (shape == 'rect') {
          rect(mouseX + offsetX, mouseY + offsetY, size, size);
        }
      }