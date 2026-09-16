
//Establishes variables

let food = []; //array to hold all Food objects
let snakes = [];
let cellSize = 20;
let maxFood = 60;
let cols, rows;
const numberOfSnakes = 20;
let gameState = "PLAY"; // PLAY or WINNER
let winner = null; //winner doesnt exist yet
const minFood = 40;

function setup() {
  createCanvas(1600, 1000);
  background(10);

  // Calculate how many columns and rows fit the canvas based on cellSize
  cols = Math.floor(width / cellSize);
  rows = Math.floor(height / cellSize);

  maxCols = cols;
  maxRows = rows;

  snakes = createSnakes(numberOfSnakes); //spawns snakes
}

function draw() {
  background(10);
  stroke(40);
  strokeWeight(1);
  drawGrid();
  drawFood();

  for (let s of snakes) { // update snake pos
    s.think();
    s.update();
    s.draw();
  }

  checkGamestate(); //change the gamestate to winner when only one snake left
  addFood();
  drawLeaderboard();
}

function drawGrid() // Draws the grid lines using the defined cellSize
 { 
  for (let x = 0; x <= width; x += cellSize) {
    line(x, 0, x, height);
  }
  for (let y = 0; y <= height; y += cellSize) {
    line(0, y, width, y);
  }
}

class Food { //food class 
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.x = this.col * cellSize + cellSize / 2;
    this.y = this.row * cellSize + cellSize / 2;
    this.baseSize = 6;
    this.pulseSpeed = random(0.05, 0.1);
    this.color = color(random(50, 255), random(50, 255), random(50, 255));
  }

  draw() {
    let pulse = sin(frameCount * this.pulseSpeed);
    let size = this.baseSize + pulse * 4;
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, size, size);
  }
}

function drawFood() { // draws the Food as a pulsing circle with random color
  for (let f of food) {
    f.draw();
  }
}

function addFood() //adds foor to random spot on grid and ckecks if a snake is in the spot
{
  while (food.length < minFood) {
    let col = floor(random(cols));
    let row = floor(random(rows));
    let collision = false;
    for (let s of snakes) {
      for (let seg of s.segments) {
        if (seg.col === col && seg.row === row) {
          collision = true;
          break;
        }
      }
      if (collision) break;
    }
    if (!collision) {
      food.push(new Food(col, row));
    }
  }
}

function createSnakes(num) {
  let snakeArray = [];
  for (let i = 0; i < num; i++) {
    // Random starting position
    let row = floor(random(rows));
    let col = floor(random(cols));
    // Assign a name to the snake
    let name = `Snake ${i + 1}`;
    
    let snake = new SimpleSnake(row, col, name); //adds a simple snake to the arraw with the parameters
    snake.updateInterval = random(80, 200);
    snakeArray.push(snake);
  }
  return snakeArray;
}

function drawLeaderboard() {
  fill(255);
  textSize(20);
  textAlign(LEFT, TOP);
  // Sort snakes by score
  let sortedSnakes = [...snakes].sort((a, b) => b.score - a.score);
  for (let i = 0; i < sortedSnakes.length; i++) {
    let s = sortedSnakes[i];
    fill(s.alive ? s.color : color(100)); // Gray if dead
    text(`${s.name}: ${s.score}`, 10, 10 + i * 25);
  }
}

function checkGamestate() //checks the gamestate and draws the winner screen
{
  if (gameState === "PLAY") {
    let aliveSnakes = snakes.filter(s => s.alive);
    if (aliveSnakes.length === 1) {
      gameState = "WINNER";
      winner = aliveSnakes[0]; //last snake left in the starting snake array
    }
  }

  if (gameState === "WINNER") {
    fill(0, 150); // dim overlay
    rect(0, 0, width, height);
    fill(winner.color);
    textSize(50);
    textAlign(CENTER, CENTER);
    text(`Winner: ${winner.name}\nScore: ${winner.score}`, width / 2, height / 2); //displays winning snake
  }
}

function mousePressed() { //reset game on click
  if (gameState === "WINNER") {
    food = [];
    for (let i = 0; i < maxFood; i++) {
      let col = floor(random(cols));
      let row = floor(random(rows));
      food.push(new Food(col, row));
    }
    // Reset snakes
    snakes = createSnakes(numberOfSnakes);
    // Reset game state
    gameState = "PLAY";
    //makes it so theres no winner
    winner = null;
  }
}






