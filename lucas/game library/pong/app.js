// Get canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game settings
const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 100;
const BALL_SIZE = 20;
const PADDLE_SPEED = 6;
const BALL_SPEED = 4;

// Game objects
const paddle1 = { x: 30, y: canvas.height / 2 - PADDLE_HEIGHT / 2, width: PADDLE_WIDTH, height: PADDLE_HEIGHT };
const paddle2 = { x: canvas.width - 30 - PADDLE_WIDTH, y: canvas.height / 2 - PADDLE_HEIGHT / 2, width: PADDLE_WIDTH, height: PADDLE_HEIGHT };
const ball = { x: canvas.width / 2 - BALL_SIZE / 2, y: canvas.height / 2 - BALL_SIZE / 2, size: BALL_SIZE, dx: BALL_SPEED, dy: BALL_SPEED };

function drawPaddle(paddle) {
    ctx.fillStyle = 'white';
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

function drawBall() {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(ball.x + ball.size / 2, ball.y + ball.size / 2, ball.size / 2, 0, Math.PI * 2);
    ctx.fill();
}

function update() {
    // Move the ball
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Ball collision with top and bottom
    if (ball.y <= 0 || ball.y + ball.size >= canvas.height) {
        ball.dy = -ball.dy;
    }

    // Ball collision with paddles
    if (ball.x <= paddle1.x + paddle1.width && ball.y + ball.size >= paddle1.y && ball.y <= paddle1.y + paddle1.height) {
        ball.dx = -ball.dx;
    }
    if (ball.x + ball.size >= paddle2.x && ball.y + ball.size >= paddle2.y && ball.y <= paddle2.y + paddle2.height) {
        ball.dx = -ball.dx;
    }

    // Ball out of bounds
    if (ball.x < 0 || ball.x > canvas.width) {
        // Reset ball position
        ball.x = canvas.width / 2 - BALL_SIZE / 2;
        ball.y = canvas.height / 2 - BALL_SIZE / 2;
        ball.dx = BALL_SPEED;
        ball.dy = BALL_SPEED;
    }

    // Control paddles with keyboard
    if (keys['w'] && paddle1.y > 0) {
        paddle1.y -= PADDLE_SPEED;
    }
    if (keys['s'] && paddle1.y < canvas.height - paddle1.height) {
        paddle1.y += PADDLE_SPEED;
    }
    if (keys['ArrowUp'] && paddle2.y > 0) {
        paddle2.y -= PADDLE_SPEED;
    }
    if (keys['ArrowDown'] && paddle2.y < canvas.height - paddle2.height) {
        paddle2.y += PADDLE_SPEED;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle(paddle1);
    drawPaddle(paddle2);
    drawBall();
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Keyboard controls
const keys = {};
window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});
window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

// Start the game
gameLoop();
