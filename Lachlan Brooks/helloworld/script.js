let scene, camera, renderer;
let controls, player;

function init() {
  // Scene
  scene = new THREE.Scene();
  
  // Camera (player's view)
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 1.6, 0); // Set camera position (y = 1.6 is eye level)
  
  // Renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('container').appendChild(renderer.domElement);
  
  // Controls (OrbitControls for camera movement)
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  
  // Floor (ground plane)
  const groundGeometry = new THREE.PlaneGeometry(20, 20);
  const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, side: THREE.DoubleSide });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2; // Rotate to be horizontal
  scene.add(ground);
  
  // Player (camera as player's view)
  player = camera;
  
  // Event listeners
  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('keyup', onKeyUp);
  
  // Game loop (animate function)
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

// Game loop (animate function)
function animate() {
  requestAnimationFrame(animate);
  
  // Update player movement
  updatePlayerMovement();
  
  // Update controls (if used)
  controls.update();
  
  // Render scene
  renderer.render(scene, camera);
}

// Start the game
init();
