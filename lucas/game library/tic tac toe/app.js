const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');

let currentPlayer = 'X';
let board = Array(9).fill(null);
let gameOver = false;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return board.every(cell => cell) ? 'Draw' : null;
}

function handleClick(e) {
    const index = e.target.dataset.index;

    if (board[index] || gameOver) return;

    board[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    const winner = checkWinner();
    if (winner) {
        if (winner === 'Draw') {
            alert("It's a draw!");
        } else {
            alert(`${winner} wins!`);
        }
        gameOver = true;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function resetGame() {
    board = Array(9).fill(null);
    currentPlayer = 'X';
    gameOver = false;
    cells.forEach(cell => cell.textContent = '');
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);
