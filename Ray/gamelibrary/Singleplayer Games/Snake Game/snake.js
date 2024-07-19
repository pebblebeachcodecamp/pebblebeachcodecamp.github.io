// Constants
const GRID_SIZE = 20;
const GAME_WIDTH = 400;
const GAME_HEIGHT = 400;

// Game variables
let snake = [{ x: 10, y: 10 }];
let food = { x: 15, y: 15 };
let direction = 'right';
let gameLoopId;
let score = 0;

const gameCanvas = document.getElementById('gameCanvas');
const ctx = gameCanvas.getContext('2d');

const startButton = document.getElementById('startButton');
const overlay = document.getElementById('overlay');

startButton.addEventListener('click', startGame);
document.addEventListener('keydown', handleKeyDown);

// Game functions
function startGame() {
    snake = [{ x: 10, y: 10 }];
    food = generateFoodPosition();
    direction = 'right';
    score = 0;

    // Hide overlay and display game canvas
    overlay.style.display = 'none';
    gameCanvas.style.display = 'block';

    // Start game loop
    gameLoopId = setInterval(gameLoop, 100); // Adjust speed here
}

function gameLoop() {
    // Move snake
    moveSnake();

    // Check for collision
    if (checkCollision()) {
        gameOver();
        return; // Exit the game loop early
    }

    // Clear canvas
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Draw food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * GRID_SIZE, food.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);

    // Draw snake
    ctx.fillStyle = 'green';
    snake.forEach(segment => {
        ctx.fillRect(segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
    });

    // Display score
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 30);
}

// Changing the snakes direction
function moveSnake() {
    let newHead = { x: snake[0].x, y: snake[0].y };
    switch (direction) {
        case 'up':
            newHead.y -= 1;
            break;
        case 'down':
            newHead.y += 1;
            break;
        case 'left':
            newHead.x -= 1;
            break;
        case 'right':
            newHead.x += 1;
            break;
    }

    snake.unshift(newHead);

    if (snake[0].x === food.x && snake[0].y === food.y) {
        eatFood();
    } else {
        snake.pop();
    }
}

// Increases the score by 10 per food eaten 
function eatFood() {
    score += 10;
    food = generateFoodPosition();
}

// Generates random food position within the game area 
function generateFoodPosition() {
    let foodX = Math.floor(Math.random() * (GAME_WIDTH / GRID_SIZE));
    let foodY = Math.floor(Math.random() * (GAME_HEIGHT / GRID_SIZE));
    return { x: foodX, y: foodY };
}

// Controls the snake direction //
function handleKeyDown(event) {
    switch (event.key) {
        case 'ArrowUp':
            if (direction !== 'down') {
                direction = 'up';
            }
            break;
        case 'ArrowDown':
            if (direction !== 'up') {
                direction = 'down';
            }
            break;
        case 'ArrowLeft':
            if (direction !== 'right') {
                direction = 'left';
            }
            break;
        case 'ArrowRight':
            if (direction !== 'left') {
                direction = 'right';
            }
            break;
    }
}

function checkCollision() {
    // Check if snake hits the wall
    if (snake[0].x < 0 || snake[0].x >= GAME_WIDTH / GRID_SIZE || snake[0].y < 0 || snake[0].y >= GAME_HEIGHT / GRID_SIZE) {
        return true;
    }

    // Check if snake hits itself
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }

    return false;
}

function gameOver() {
    clearInterval(gameLoopId);
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText('Game Over', GAME_WIDTH / 2 - 80, GAME_HEIGHT / 2 - 60);

    overlay.style.display = 'block';
    startButton.textContent = 'Restart Game';

    // Append startButton to overlay if not already appended
    if (!overlay.contains(startButton)) {
        overlay.appendChild(startButton);
    }

    startButton.addEventListener('click', startGame);
}