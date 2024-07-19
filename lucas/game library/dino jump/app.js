const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const score = document.getElementById('score');

const highScore = localStorage.getItem('highScore');

const highScoreElement = document.getElementById('highScore');
highScoreElement.innerText = `High Score: ${highScore || 0}`;

const dino = {
    x: 50,
    y: 150,
    width: 20,
    height: 20,
    color: '#000',
    dy: 0,
    gravity: 0.6,
    jumpStrength: -10,
    isJumping: false,
    jumpCount: 0
};

const obstacles = [];
const obstacleFrequency = 100; // frames
let frameCount = 0;

function drawDino() {
    ctx.fillStyle = dino.color;
    ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
}

function updateDino() {
    if (dino.isJumping) {
        dino.dy += dino.gravity;
        dino.y += dino.dy;

        if (dino.y > 150) {
            dino.y = 150;
            dino.dy = 0;
            dino.isJumping = false;
            dino.jumpCount = 0; // Reset jump count when dino lands
        }
    }
}

function handleKeyPress(event) {
    if (event.code === 'Space') {
        jump()
    }
}

function jump() {
    if (dino.jumpCount < 2) {
        dino.isJumping = true;
        dino.dy = dino.jumpStrength;
        dino.jumpCount++;
    }
}

function drawObstacles() {
    ctx.fillStyle = '#f00';
    obstacles.forEach(obstacle => {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        obstacle.x -= obstacle.speed;
    });
}

function createObstacle() {
    const randomHeight = Math.floor(Math.random() * 50) + 20; // Random height between 20 and 70
    const randomSpeed = Math.random() * 3 + 2; // Random speed between 2 and 5
    const obstacle = {
        x: canvas.width,
        y: canvas.height - randomHeight, // Position obstacle from the bottom
        width: 20,
        height: randomHeight,
        speed: randomSpeed
    };
    obstacles.push(obstacle);
}

function updateObstacles() {
    if (frameCount % obstacleFrequency === 0) {
        createObstacle();
    }

    obstacles.forEach((obstacle, index) => {
        if (obstacle.x + obstacle.width < 0) {
            obstacles.splice(index, 1);
        }
    });
}

function checkCollision() {
    obstacles.forEach(obstacle => {
        if (dino.x < obstacle.x + obstacle.width &&
            dino.x + dino.width > obstacle.x &&
            dino.y < obstacle.y + obstacle.height &&
            dino.y + dino.height > obstacle.y) {
            alert("Game Over!");
            setHighScore();
            document.location.reload();
        }
    });
}

function setHighScore() {
    let highScore = localStorage.getItem('highScore');
    if (highScore === null) {
        highScore = 0;
    } else {
        highScore = parseInt(highScore);
    }

    if (frameCount > highScore) {
        localStorage.setItem('highScore', frameCount);
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDino();
    updateDino();
    drawObstacles();
    updateObstacles();
    checkCollision();

    score.innerText = frameCount;

    frameCount++;
    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', handleKeyPress);

// when clicking the button, jump!
const jumpButton = document.getElementById("jumpButton")
jumpButton.addEventListener('click', jump)


gameLoop();