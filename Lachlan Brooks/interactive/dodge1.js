const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 600;

const player1 = {
    x: 100,
    y: canvas.height - 30,
    width: 20,
    height: 20,
    color: 'red',
    dx: 0,
    dy: 0
};

const player2 = {
    x: canvas.width - 120,
    y: canvas.height - 30,
    width: 20,
    height: 20,
    color: 'blue',
    dx: 0,
    dy: 0
};

const balls = [];

function createBall() {
    const ball = {
        x: Math.random() * canvas.width,
        y: 10,
        radius: 10,  
        dy: 8,
        color: 'red'
    };
    balls.push(ball);
}

function drawPlayer(player) {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawBall(ball) {
    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

function updateBall(ball) {
    ball.y += ball.dy;
    if (ball.y > canvas.height) {
        ball.y = 0;
        ball.x = Math.random() * canvas.width;
    }
}

function updatePlayer(player) {
    player.x += player.dx;
    player.y += player.dy;

    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
    if (player.y < 0) player.y = 0;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
}

function detectCollision(player, ball) {
    const distX = Math.abs(ball.x - player.x - player.width / 2);
    const distY = Math.abs(ball.y - player.y - player.height / 2);

    if (distX <= (player.width / 2 + ball.radius) && distY <= (player.height / 2 + ball.radius)) {

        document.location.reload();
    }
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
    clear();

    drawPlayer(player1);
    drawPlayer(player2);

    balls.forEach(ball => {
        drawBall(ball);
        updateBall(ball);
        detectCollision(player1, ball);
        detectCollision(player2, ball);
    });

    updatePlayer(player1);
    updatePlayer(player2);

    requestAnimationFrame(update);
}

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            player2.dx = -5;
            break;
        case 'ArrowRight':
            player2.dx = 5;
            break;
        case 'ArrowUp':
            player2.dy = -5;
            break;
        case 'ArrowDown':
            player2.dy = 5;
            break;
        case 'a':
            player1.dx = -5;
            break;
        case 'd':
            player1.dx = 5;
            break;
        case 'w':
            player1.dy = -5;
            break;
        case 's':
            player1.dy = 5;
            break;
    }
});

document.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowRight':
            player2.dx = 0;
            break;
        case 'ArrowUp':
        case 'ArrowDown':
            player2.dy = 0;
            break;
        case 'a':
        case 'd':
            player1.dx = 0;
            break;
        case 'w':
        case 's':
            player1.dy = 0;
            break;
    }
});

setInterval(createBall, 3000);
update();
__