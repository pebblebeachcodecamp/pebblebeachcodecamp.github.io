// Initialize the game canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set up game variables
const playerWidth = 50;//put both width and height the same
const playerHeight = 50;//
const playerSpeed = 10;//speed

let playerX = canvas.width / 2 - playerWidth / 2;
const playerY = canvas.height - 40;

const enemyWidth = 30;
const enemyHeight = 30;
const enemySpeed = 2;
const enemies = [];

let chargeMeter = 0; // Current percentage of the charge meter
const chargeRate = 10; // Percentage increase per second when holding space
const dischargeRate = 0.5; // Percentage decrease per second when space is not held
const maxCharge = 100; // Maximum percentage the meter can reach
let isCharging = false; // Flag to track if the space bar is currently being held


const bulletWidth = 3;
const bulletHeight = 10;
const bulletSpeed = 5;
let bullets = [];
let canShoot = true; // Flag to control firing rate

let gameOver = false;

// Variables to track keys being pressed
let leftPressed = false;
let rightPressed = false;
let spacePressed = false;

// Event listeners for key presses and releases
document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowLeft') {
        leftPressed = true;
    } else if (event.code === 'ArrowRight') {
        rightPressed = true;
    } else if (event.code === 'Space' && !gameOver && !isCharging) {
        event.preventDefault()
        spacePressed = true;
        isCharging = true;
        startCharging();
    }
});

document.addEventListener('keyup', (event) => {
    if (event.code === 'ArrowLeft') {
        leftPressed = false;
    } else if (event.code === 'ArrowRight') {
        rightPressed = false;
    } else if (event.code === 'Space') {
        event.preventDefault()
        isCharging = false;
        spacePressed = false;
    }
});

function startCharging() {
    if (isCharging && chargeMeter < maxCharge) {
        chargeMeter += chargeRate;
        if (chargeMeter >= maxCharge) {
            canShoot = false; // Disable shooting when fully charged
        } else {
            canShoot = true;
        }
        setTimeout(startCharging, 400); // Update meter every second// the bar meter//og was 1000
    }
}

// Function to handle shooting bullets
function shootBullet() {
    if (canShoot) {
        const bulletX = playerX + playerWidth / 2 - bulletWidth / 2;
        const bulletY = playerY - bulletHeight;
        bullets.push({ x: bulletX, y: bulletY });
        canShoot = false; // Set canShoot to false to prevent rapid firing
        setTimeout(() => {
            if(chargeMeter < maxCharge) {
                canShoot = true; // Allow shooting again after 0.5 seconds
            }
        }, 210); // 500 milliseconds = 0.5 seconds
    }
}

const playerImage = new Image();
playerImage.src = 'spaceship.gif';

const enemyImage = new Image();
enemyImage.src = 'alien.png';


function update() {
    if (!gameOver) {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update player position based on keys pressed
        if (leftPressed && playerX > 0) {
            playerX -= playerSpeed;
        }
        if (rightPressed && playerX < canvas.width - playerWidth) {
            playerX += playerSpeed;
        }

        // Handle shooting
        if (spacePressed && canShoot && chargeMeter < maxCharge) {
            shootBullet();
            canShoot = false; // Prevent rapid firing
            setTimeout(() => {
                canShoot = true; // Allow shooting again after cooldown
            }, 500); // Adjust cooldown time as needed (milliseconds)
        }

        // Draw player image////////////////////inside is the code for the bar meter 
        ctx.drawImage(playerImage, playerX, playerY, playerWidth, playerHeight);

         // Draw charge meter
         let chargeColor = 'green' // green

         console.log('charge meter', chargeMeter)

         if(chargeMeter > 50 && chargeMeter <= 75) {
            chargeColor = 'yellow'
         } else if (chargeMeter > 75 && chargeMeter < 100) {
            chargeColor = 'orange'
         } else if (chargeMeter >= 100) {
            chargeColor = 'red'
         }//////////////////////////////////////////////////////////////////////

         ctx.fillStyle = chargeColor;
         ctx.fillRect(canvas.width - 30, canvas.height - 100, 20, -chargeMeter); // Draw inverted bar

          // Handle charging meter decrease when space bar is not held
    if (!isCharging && chargeMeter > 0) {
        chargeMeter -= dischargeRate;
        if (chargeMeter <= 0) {
            chargeMeter = 0; // Prevent negative values
        }
    }

        // Update and draw bullets
        bullets.forEach((bullet, index) => {
            bullet.y -= bulletSpeed;
            ctx.fillStyle = '#f00';
            ctx.fillRect(bullet.x, bullet.y, bulletWidth, bulletHeight);

            // Remove bullets that go off-screen
            if (bullet.y < 0) {
                bullets.splice(index, 1);
            }
        });

                // Spawn enemies
                if (Math.random() < 0.1) { // Adjust spawn rate as needed//og 0.02
                    const enemyX = Math.random() * (canvas.width - enemyWidth);
                    enemies.push({ x: enemyX, y: 0 });
                }
        

        // Update and draw enemies
        enemies.forEach((enemy, index) => {
            enemy.y += enemySpeed;
       
            // Draw player image
            ctx.drawImage(enemyImage, enemy.x, enemy.y, enemyWidth, enemyHeight);

            // Check collision with player
            if (enemy.y + enemyHeight >= playerY + 40) {
                gameOver = true;
            }

            // Check collision with bullets
            bullets.forEach((bullet, bulletIndex) => {
                if (bullet.y <= enemy.y + enemyHeight && bullet.x >= enemy.x && bullet.x <= enemy.x + enemyWidth) {
                    increaseScore();
                    enemies.splice(index, 1);
                    bullets.splice(bulletIndex, 1);
                }
            });

            // Remove enemies that reach the bottom
            if (enemy.y > canvas.height) {
                enemies.splice(index, 1);
            }
        });

        // Game over condition
        if (gameOver) {
            ctx.fillStyle = '#fff';
            ctx.font = '30px Arial';
            ctx.fillText('Game Over', canvas.width / 2 - 80, canvas.height / 2);
        } else {
            requestAnimationFrame(update);
        }
    }
}

let score = 0;

function increaseScore() {
    score++;
    document.getElementById('score').innerHTML = score;
}


// Start the game loop
update();
