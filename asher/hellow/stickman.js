// Get the stickman parts
const head = document.querySelector('.head');
const body = document.querySelector('.body');
const leftArm = document.querySelector('.left-arm');
const rightArm = document.querySelector('.right-arm');
const leftLeg = document.querySelector('.left-leg');
const rightLeg = document.querySelector('.right-leg');

// Function to add ragdoll physics
function addRagdollPhysics() {
  const parts = [head, body, leftArm, rightArm, leftLeg, rightLeg];
  
  parts.forEach(part => {
    part.style.transition = 'transform 0.3s ease';
  });

  // Simulate ragdoll physics
  document.addEventListener('click', function() {
    parts.forEach(part => {
      const randomRotation = Math.random() * 180 - 90;
      const randomDirection = Math.random() > 0.5 ? 1 : -1;
      part.style.transform = `rotate(${randomRotation * randomDirection}deg)`;
    });
  });
}

// Call the function to add ragdoll physics on page load
window.onload = addRagdollPhysics;
