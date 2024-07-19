const gameWidth = 800;
const gameHeight = 600;
const paddleHeight = 100;
const paddleWidth = 20;
const paddleSpeed = 5;
const ballSpeed = 5;
let leftPaddleY = gameHeight / 2 - paddleHeight / 2;
let rightPaddleY = gameHeight / 2 - paddleHeight / 2;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballSpeedX = ballSpeed;
let ballSpeedY = ballSpeed;
let scoreLeft = 0;
let scoreRight = 0;

const leftPaddle = document.getElementById('leftPaddle');
const rightPaddle = document.getElementById('rightPaddle');
const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('startButton');
const gameCanvas = document.getElementById('gameCanvas');

// Hide game canvas and start button initially
gameCanvas.style.display = 'none';
startButton.style.display = 'block';

// Update paddle positions
function updatePaddles() {
    leftPaddle.style.top = leftPaddleY + 'px';
    rightPaddle.style.top = rightPaddleY + 'px';
}

// Update ball position
function updateBall() {
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
}

// Update score display
function updateScore() {
    scoreDisplay.textContent = `${scoreLeft} - ${scoreRight}`;
}

// Move paddles based on the input from the keyboard //
const keysPressed = {};
document.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
});

document.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
});

function movePaddles() {
    // Left Paddle movement (W and S keys)
    if (keysPressed['w'] && leftPaddleY > 0) {
        leftPaddleY -= paddleSpeed;
    }
    if (keysPressed['s'] && leftPaddleY < gameHeight - paddleHeight) {
        leftPaddleY += paddleSpeed;
    }

    // Right Paddle movement (ArrowUp and ArrowDown keys)
    if (keysPressed['ArrowUp'] && rightPaddleY > 0) {
        rightPaddleY -= paddleSpeed;
    }
    if (keysPressed['ArrowDown'] && rightPaddleY < gameHeight - paddleHeight) {
        rightPaddleY += paddleSpeed;
    }
}

// Update game state
function update() {
    // Move ball
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Check collision with walls
    if (ballY <= 0 || ballY >= gameHeight - 20) {
        ballSpeedY = -ballSpeedY;
    }

    // Check collision with paddles
    if (ballX <= paddleWidth && ballY >= leftPaddleY && ballY <= leftPaddleY + paddleHeight) {
        ballSpeedX = -ballSpeedX;
    } else if (ballX >= gameWidth - paddleWidth - 20 && ballY >= rightPaddleY && ballY <= rightPaddleY + paddleHeight) {
        ballSpeedX = -ballSpeedX;
    }

    // Check if ball passes left or right boundary
    if (ballX <= 0) {
        scoreRight++;
        resetBall();
    } else if (ballX >= gameWidth - 20) {
        scoreLeft++;
        resetBall();
    }

    // Update visuals
    updatePaddles();
    updateBall();
    updateScore();
}

// Reset ball to center
function resetBall() {
    // Reset ball to center
    ballX = gameWidth / 2;
    ballY = gameHeight / 2;

    // Generate random direction for ball movement
    ballSpeedX = Math.random() > 0.5 ? ballSpeed : -ballSpeed; // Randomly set direction left or right
    ballSpeedY = Math.random() > 0.5 ? ballSpeed : -ballSpeed; // Randomly set direction up or down
}

// Game loop
let gameLoopId;

function gameLoop() {
    movePaddles();
    update();
    gameLoopId = requestAnimationFrame(gameLoop);
}

function updateScore() {
    scoreDisplay.textContent = `${scoreLeft} - ${scoreRight}`;

    // Check if either player wins
    if (scoreLeft >= 11 || scoreRight >= 11) {
        // Stop the game loop
        cancelAnimationFrame(gameLoop);
        
        // Determine the winner
        let winner = scoreLeft >= 11 ? 'Player 1' : 'Player 2';
        
        // Display game over message
        alert(`Game Over! ${winner} wins!`);

        // Reset scores to 0-0
        scoreLeft = 0;
        scoreRight = 0;
    }
}


// Start the game when the Start button is clicked
startButton.addEventListener('click', () => {
    // Hide the start button and show the game canvas
    startButton.style.display = 'none';
    
    // Reset scores if needed
    scoreLeft = 0;
    scoreRight = 0;

    // Reset ball position and direction
    resetBall();

    // Start the game loop
    gameLoop();
});
