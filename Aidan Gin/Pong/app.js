// create a canvas element
var canvas = document.getElementById('gameCanvas');

// get the 2d context
var ctx = canvas.getContext('2d');

// set the canvas width and height
canvas.width = 800;
canvas.height = 600;

// create the paddle
var paddleWidth = 400;
var paddleHeight = 50;

var paddleX = (canvas.width - paddleWidth) / 2;
var paddleY = canvas.height - paddleHeight - 10;

var paddleSpeed = 10;

// create the ball
var ballSize = 20;
var ballX = canvas.width / 2;
var ballY = canvas.height / 4 ;
var ballSpeedX = 5;
var ballSpeedY = 5;

// draw the paddle
function drawPaddle() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);
}

// draw the ball
function drawBall() {
    ctx.fillStyle = 'lime';
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballSize, 0, Math.PI * 2);
    ctx.fill();
}

// Set left arrow key to move paddle left
var leftArrowPressed = false;

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    leftArrowPressed = true;
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'ArrowLeft') {
    leftArrowPressed = false;
  }
});

// Set right arrow key to move paddle right
var rightArrowPressed = false;

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    rightArrowPressed = true;
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'ArrowRight') {
    rightArrowPressed = false;
  }
});

// update the ball's position and check for collision with the paddle or the walls
function updateBall() {
  // update the ball's position
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // check for collision with the walls
  if (ballX + ballSize > canvas.width || ballX - ballSize < 0) {
    ballSpeedX *= -1;
  }

  // check for collision with the top of the screen
  if (ballY - ballSize < 0) {
    ballSpeedY *= -1;
  }

  // check for collision with the paddle
  if (ballY + ballSize > paddleY && ballX > paddleX && ballX < paddleX + paddleWidth) {
    ballSpeedY *= -1.1
    ballSpeedX *= 1.1;
  }

  // check for collision with the bottom of the screen
  if (ballY + ballSize > canvas.height) {
    alert('Game Over');
    document.location.reload();
  }
}

// loop to draw the game
setInterval(function() {
  if (leftArrowPressed && paddleX > 0) {
    paddleX -= paddleSpeed;
  }
  if (rightArrowPressed && paddleX + paddleWidth < canvas.width) {
    paddleX += paddleSpeed;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddle();
  drawBall();
  updateBall();
}, 1000 / 60);