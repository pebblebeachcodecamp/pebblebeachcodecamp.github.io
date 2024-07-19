// Initialize Three.js components
let scene, camera, renderer, controls;
let player, bullets = [];

function init() {
  // Scene
  scene = new THREE.Scene();
  
  // Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 1.6, 0); // Set camera position (y = 1.6 is eye level)
  
  // Renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('container').appendChild(renderer.domElement);
  
  // Controls (OrbitControls for camera movement)
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  
  // Floor
  const floorGeometry = new THREE.PlaneGeometry(20, 20);
  const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, side: THREE.DoubleSide });
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = -Math.PI / 2; // Rotate to be horizontal
  scene.add(floor);
  
  // Player (Cube as placeholder)
  const playerGeometry = new THREE.BoxGeometry(0.2, 0.6, 0.2);
  const playerMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  player = new THREE.Mesh(playerGeometry, playerMaterial);
  player.position.set(0, 0.3, 0); // Position player
  scene.add(player);
  
  // Event listeners
  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('keyup', onKeyUp);
  document.addEventListener('mousedown', shoot);
  
  // Game loop
  animate();
}

// Handle player movement
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;

function onKeyDown(event) {
  switch (event.keyCode) {
    case 87: // W
      moveForward = true;
      break;
    case 83: // S
      moveBackward = true;
      break;
    case 65: // A
      moveLeft = true;
      break;
    case 68: // D
      moveRight = true;
      break;
  }
}

function onKeyUp(event) {
  switch (event.keyCode) {
    case 87: // W
      moveForward = false;
      break;
    case 83: // S
      moveBackward = false;
      break;
    case 65: // A
      moveLeft = false;
      break;
    case 68: // D
      moveRight = false;
      break;
  }
}

// Update player movement
function updatePlayerMovement() {
  const playerSpeed = 0.1;
  
  if (moveForward) player.position.z -= playerSpeed;
  if (moveBackward) player.position.z += playerSpeed;
  if (moveLeft) player.position.x -= playerSpeed;
  if (moveRight) player.position.x += playerSpeed;
}

// Handle shooting
function shoot() {
  const bulletGeometry = new THREE.SphereGeometry(0.05, 8, 8);
  const bulletMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const bullet = new THREE.Mesh(bulletGeometry, bulletMaterial);
  
  bullet.position.copy(player.position);
  bullet.velocity = new THREE.Vector3(0, 0, -0.5).applyQuaternion(player.quaternion); // Move in player direction
  
  bullets.push(bullet);
  scene.add(bullet);
}

// Update bullets
function updateBullets() {
  bullets.forEach((bullet, index) => {
    bullet.position.add(bullet.velocity);
    
    // Remove bullets when out of bounds
    if (bullet.position.z < -10) {
      bullets.splice(index, 1);
      scene.remove(bullet);
    }
  });
}

// Game loop (animate function)
function animate() {
  requestAnimationFrame(animate);
  
  // Update player movement
  updatePlayerMovement();
  
  // Update bullets
  updateBullets();
  
  // Update controls (if used)
  controls.update();
  
  // Render scene
  renderer.render(scene, camera);
}

// Start the game
init();
