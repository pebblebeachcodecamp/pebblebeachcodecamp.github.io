let cookies = 0;
let clicksPerSecond = 0;
let autoClickers = [
    { name: "Auto Clicker", cost: 10, clicksPerSecond: 1, count: 0 },
    { name: "Grandma", cost: 50, clicksPerSecond: 5, count: 0 },
    { name: "Farm", cost: 100, clicksPerSecond: 10, count: 0 },
    { name: "Mine", cost: 500, clicksPerSecond: 25, count: 0 },
    { name: "Factory", cost: 1000, clicksPerSecond: 50, count: 0 },
    { name: "Bank", cost: 2500, clicksPerSecond: 75, count: 0 },
    { name: "Temple", cost: 7500, clicksPerSecond: 100, count: 0 },
    { name: "Wizard Tower", cost: 15000, clicksPerSecond: 150, count: 0 },
    { name: "Shipment", cost: 30000, clicksPerSecond: 250, count: 0 },
    { name: "Alchemy Lab", cost: 50000, clicksPerSecond: 500, count: 0 },
    { name: "Portal", cost: 80000, clicksPerSecond: 800, count: 0 },
    { name: "Time Machine", cost: 120000, clicksPerSecond: 1200, count: 0 }
];
let autoClickerIntervals = [];
let cpsInterval;

const cookieButton = document.getElementById('cookie');
const cookieCountDisplay = document.getElementById('cookieCount');
const autoClickerDisplays = document.querySelectorAll('.auto-clicker');

// Function to handle clicking the cookie
cookieButton.addEventListener('click', () => {
    cookies++;
    updateCookieCount();
});

// Function to update cookie count display
function updateCookieCount() {
    cookieCountDisplay.textContent = cookies;
}

// Function to update auto clicker displays
function updateAutoClickerDisplays() {
    autoClickerDisplays.forEach(display => {
        const type = display.dataset.type;
        const autoClicker = autoClickers.find(ac => ac.name === type);
        display.querySelector('.count').textContent = autoClicker.count;
        display.querySelector('.cost').textContent = autoClicker.cost;
    });
}


// Function to handle buying auto clickers
function buyAutoClicker(type) {
    const autoClicker = autoClickers.find(ac => ac.name === type);
    if (cookies >= autoClicker.cost) {
        cookies -= autoClicker.cost;
        autoClicker.count++;
        updateCookieCount();
        updateAutoClickerDisplays();
        if (autoClicker.count === 1) {
            startAutoClicker(type);
        }
    } else {
        alert(`Not enough cookies to buy ${autoClicker.name}!`);
    }
}

// Function to start auto clicker for a specific type
function startAutoClicker(type) {
    const autoClicker = autoClickers.find(ac => ac.name === type);
    const interval = setInterval(() => {
        cookies += autoClicker.clicksPerSecond * autoClicker.count;
        updateCookieCount();
    }, 1000); // Auto click every 1000ms (1 second)
    autoClickerIntervals.push({ type: type, interval: interval });
}

// Ensure that all auto clicker intervals are stopped when the page unloads
window.addEventListener('beforeunload', () => {
    autoClickerIntervals.forEach(acInterval => {
        clearInterval(acInterval.interval);
    });
});

// Initialize auto clicker displays
updateAutoClickerDisplays();




