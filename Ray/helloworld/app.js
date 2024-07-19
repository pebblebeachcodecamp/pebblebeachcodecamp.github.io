let count = 0;
function Counter() {
count++;
document.getElementById('counter').textContent = count;
}


let clickCount = 0;
let startTime;
let cpsDisplay = document.getElementById('cpsDisplay');
let clickButton = document.getElementById('button');
let timeoutId;

function updateCPS() {
    // Calculate elapsed time
    let elapsedTime = (Date.now() - startTime) / 1000; 
    
    // Calculate clicks per second
    let cps = clickCount / elapsedTime;
    
    // Update the clicks per second display
    cpsDisplay.textContent = `CPS: ${cps.toFixed(1)}`;
}

function resetCounters() {
    clickCount = 0;
    startTime = null;
    clearTimeout(timeoutId); 
}

// Function to start the timeout
function startTimeout() {
    clearTimeout(timeoutId); 
    timeoutId = setTimeout(resetCounters, 3000);
}

// Event listener for button clicks
clickButton.addEventListener('click', function() {
    if (!startTime) {
        startTime = Date.now(); 
    }
    
    clickCount++;
    updateCPS();
    
    startTimeout();
});



let inactivityTimer; // variable to hold the timer

function resetTimer() {
    clearTimeout(inactivityTimer); // clear the existing timer
    inactivityTimer = setTimeout(resetCPS, 2000); // set a new timer for 2 seconds
}

function resetCPS() {
    cpsDisplay.textContent = 'CPS: 0';
    // Add your logout or inactive user handling code here
}
// Add event listeners for user activity
document.addEventListener("click", resetTimer); // reset timer on mouse move
// Initialize the timer on page load
resetTimer();

