var mic;
var song;

function preload(){
  song = loadSound('Audio/latin.mp3')
}

function setup() {
  createCanvas(512, 400);
  song.play();
  fill(0,400,255);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);
  var vol = mic.getLevel();
  ellipse(100,100,200,vol*200);
  console.log(vol);
}