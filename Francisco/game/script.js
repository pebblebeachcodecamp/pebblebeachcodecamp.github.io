document.addEventListener('DOMContentLoaded', () => {
    const healthBar = document.getElementById('health');
    const attackButton = document.getElementById('attackButton');
    let health = 100;

    function attackSans() {
        if (health > 0) {
            health -= 10;
            health = Math.max(0, health); // No permitir que la salud sea menor a 0
            healthBar.style.width = health + '%';
        }
    }

    attackButton.addEventListener('click', attackSans);
});

