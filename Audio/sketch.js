let mic;
let colours = ["#301100", "#EEA8E5", "#f1d4af", "#ece5ce", "#95DCD2"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let micLevel = mic.getLevel() * height * 3;
  fill(random(colours));
  circle(mouseX, mouseY, micLevel);
}