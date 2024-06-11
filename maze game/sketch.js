let maze;
let player;
let cols, rows;
let cellSize = 40;
let stack = [];
let current;
let endCell;
let timer = 100;
let gameOver = false;
let rewards = [];
let score = 0;

function setup() {
  createCanvas(800, 800);
  cols = floor(width / cellSize);
  rows = floor(height / cellSize);
  maze = new Array(cols);
  for (let i = 0; i < cols; i++) {
    maze[i] = new Array(rows);
  }
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      maze[x][y] = new Cell(x, y);
    }
  }
  current = maze[0][0];
  endCell = maze[cols - 1][rows - 1];
  player = new Player(0, 0);

  // Define rewards positions
  rewards.push(new Reward(5, 5));
  rewards.push(new Reward(10, 10));
  rewards.push(new Reward(15, 5));
  rewards.push(new Reward(15, 9));
  rewards.push(new Reward(10, 1));
  rewards.push(new Reward(10, 15));
  rewards.push(new Reward(1, 2));
  rewards.push(new Reward(6, 10));
  rewards.push(new Reward(3, 19));
  rewards.push(new Reward(13, 19));

  frameRate(950);

  setInterval(() => {
    if (timer > 0 && !gameOver) {
      timer--;
    } else if (timer === 0) {
      gameOver = true;
    }
  }, 1000);
}

function draw() {
  background(220);
  
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      maze[x][y].show();
    }
  }

  current.visited = true;
  current.highlight();

  let next = current.checkNeighbors();
  if (next) {
    next.visited = true;
    stack.push(current);
    removeWalls(current, next);
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  }

  endCell.showEnd();
  
  for (let reward of rewards) {
    reward.show();
  }

  player.show();
  player.move();


  for (let i = rewards.length - 1; i >= 0; i--) {
    if (player.collect(rewards[i])) {
      rewards.splice(i, 1);
      score++;
    }
  }

  fill(0);
  textSize(24);
  textAlign(LEFT, TOP);
  text("Time: " + timer, 10, 10);
  text("Score: " + score, 10, 40);

  if (player.x === endCell.x && player.y === endCell.y) {
    gameOver = true;
    fill(0, 255, 0);
    textSize(64);
    textAlign(CENTER, CENTER);
    text('You Win!', width / 2, height / 2);
    noLoop();
  } else if (gameOver) {
    fill(255, 0, 0);
    textSize(64);
    textAlign(CENTER, CENTER);
    text('Time\'s Up!', width / 2, height / 2);
    noLoop();
  }
}

class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.walls = [true, true, true, true]; 
    this.visited = false;
  }

  show() {
    let x = this.x * cellSize;
    let y = this.y * cellSize;
    stroke(0);
    if (this.walls[0]) line(x, y, x + cellSize, y);
    if (this.walls[1]) line(x + cellSize, y, x + cellSize, y + cellSize);
    if (this.walls[2]) line(x + cellSize, y + cellSize, x, y + cellSize);
    if (this.walls[3]) line(x, y + cellSize, x, y);
    
    if (this.visited) {
      noStroke();
      fill(200, 0, 200, 100);
      rect(x, y, cellSize, cellSize);
    }
  }

  showEnd() {
    let x = this.x * cellSize;
    let y = this.y * cellSize;
    noStroke();
    fill(0, 255, 0, 100);
    rect(x, y, cellSize, cellSize);
  }

  checkNeighbors() {
    let neighbors = [];
    let top = maze[this.x][this.y - 1];
    let right = maze[this.x + 1] && maze[this.x + 1][this.y];
    let bottom = maze[this.x][this.y + 1];
    let left = maze[this.x - 1] && maze[this.x - 1][this.y];

    if (top && !top.visited) neighbors.push(top);
    if (right && !right.visited) neighbors.push(right);
    if (bottom && !bottom.visited) neighbors.push(bottom);
    if (left && !left.visited) neighbors.push(left);

    if (neighbors.length > 0) {
      let r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }
  }

  highlight() {
    let x = this.x * cellSize;
    let y = this.y * cellSize;
    noStroke();
    fill(0, 0, 255, 100);
    rect(x, y, cellSize, cellSize);
  }
}

function removeWalls(a, b) {
  let x = a.x - b.x;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }

  let y = a.y - b.y;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    fill(0, 0, 255);
    noStroke();
    rect(this.x * cellSize, this.y * cellSize, cellSize, cellSize);
  }

  move() {
    if (keyIsDown(LEFT_ARROW) && !maze[this.x][this.y].walls[3] && this.x > 0) {
      this.x--;
    } else if (keyIsDown(RIGHT_ARROW) && !maze[this.x][this.y].walls[1] && this.x < cols - 1) {
      this.x++;
    } else if (keyIsDown(UP_ARROW) && !maze[this.x][this.y].walls[0] && this.y > 0) {
      this.y--;
    } else if (keyIsDown(DOWN_ARROW) && !maze[this.x][this.y].walls[2] && this.y < rows - 1) {
      this.y++;
    }
  }

  collect(reward) {
    return this.x === reward.x && this.y === reward.y;
  }
}

class Reward {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    fill(255, 215, 0);
    noStroke();
    ellipse(this.x * cellSize + cellSize / 2, this.y * cellSize + cellSize / 2, cellSize / 2, cellSize / 2);
  }
}





 