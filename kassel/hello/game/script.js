// Initialize canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 600;
canvas.height = 600;

// Load Kia car image
const kiaImage = new Image();
kiaImage.src = 'kia.png';

const chairImage = new Image();
chairImage.src = 'chair.jpeg';

// Game variables
let player = {
  x: canvas.width / 2,
  y: canvas.height - 50,
  width: 30,
  height: 50,
  speed: 0.1,
  acceleration: 0.001,
  rotation: 0, // in radians
  rotationSpeed: 1 // in radians
};

let obstacles = [];
const numObstacles = 15;
let score = 0;
let gameSpeed = 1;
let gameInterval;
let gameActive = true;

// Function to create initial obstacles (furniture)
function createObstacles() {
  for (let i = 0; i < numObstacles; i++) {
    const obstacleWidth = 50;
    const obstacleHeight = 50;
    const obstacleX = Math.random() * (canvas.width - obstacleWidth);
    const obstacleY = Math.random() * (canvas.height - obstacleHeight);
    

    obstacles.push({
      x: obstacleX,
      y: obstacleY,
      width: obstacleWidth,
      height: obstacleHeight
    });
  }
}

// Function to update game objects
function update() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw player (rotated)
  ctx.save();
  ctx.translate(player.x + player.width / 2, player.y + player.height / 2);
  ctx.rotate(player.rotation);
  ctx.drawImage(kiaImage, -player.width / 2, -player.height / 2, player.width, player.height);
  ctx.restore();

  // Draw obstacles (furniture)
  obstacles.forEach(obstacle => {
     ctx.drawImage(chairImage, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
     
  });

  // Move player forward
  player.y -= player.speed * Math.cos(player.rotation);
  player.x += player.speed * Math.sin(player.rotation);

  // Increase player speed over time
  player.speed += player.acceleration;

  // Check if player goes off canvas
  if (player.x < 0 || player.x + player.width > canvas.width ||
      player.y < 0 || player.y + player.height > canvas.height) {
    // Game over
    gameActive = false;
    clearInterval(gameInterval);
    alert(`Game Over! Score: ${score}`);
    location.reload(); // Reload page to restart
  }

  // Check collision with obstacles
  obstacles.forEach(obstacle => {
    if (player.x < obstacle.x + obstacle.width &&
        player.x + player.width > obstacle.x &&
        player.y < obstacle.y + obstacle.height &&
        player.y + player.height > obstacle.y) {
      // Collision detected, game over
      gameActive = false;
      clearInterval(gameInterval);
      alert(`Game Over! Score: ${score}`);
      location.reload(); // Reload page to restart
    }
  });

  // Update score (game time)
  score++;
  ctx.fillStyle = 'black';
  ctx.font = '20px Arial';
  ctx.fillText(`Score: ${score}`, 10, 30);
  
}


// Function to start the game
function startGame() {
  createObstacles();

  gameInterval = setInterval(update, 10); // Update every 10 milliseconds

  // Event listener for keyboard controls
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      player.rotation -= player.rotationSpeed;
    } else if (event.key === 'ArrowRight') {
      player.rotation += player.rotationSpeed;
    }
  });
}

// Start the game
startGame();
