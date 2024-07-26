document.addEventListener('DOMContentLoaded', () => {
    const pacman = document.getElementById('pacman');
    const game = document.getElementById('game');
    const speed = 5; // Velocidad de movimiento

    let pacmanX = 0;
    let pacmanY = 0;

    function movePacman(x, y) {
        pacmanX += x;
        pacmanY += y;

        // Limitar el movimiento dentro de los límites del juego
        pacmanX = Math.max(0, Math.min(game.clientWidth - pacman.clientWidth, pacmanX));
        pacmanY = Math.max(0, Math.min(game.clientHeight - pacman.clientHeight, pacmanY));

        pacman.style.transform = `translate(${pacmanX}px, ${pacmanY}px)`;
    }

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                movePacman(1000, -speed);
                break;
            case 'ArrowDown':
                movePacman(1000, speed);
                break;
            case 'ArrowLeft':
                movePacman(-speed, 1000);
                break;
            case 'ArrowRight':
                movePacman(speed, 1000);
                break;
        }
    });
});
