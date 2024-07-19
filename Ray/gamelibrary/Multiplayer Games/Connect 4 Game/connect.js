const ROWS = 6;
const COLS = 7;
const board = document.getElementById('board');
let currentPlayer = 'red';
let gameEnded = false;

// Create the board cells
for (let row = 0; row < ROWS; row++) {
  for (let col = 0; col < COLS; col++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.row = row;
    cell.dataset.col = col;
    board.appendChild(cell);
  }
}

// Add click event listener to each cell
board.addEventListener('click', function(e) {
  if (gameEnded) return;

  const col = e.target.dataset.col;
  if (col === undefined) return; // Ignore clicks on the board container

  const emptyCell = getEmptyCellInColumn(col);
  if (emptyCell !== null) {
    emptyCell.classList.add(currentPlayer);
    if (checkWin(parseInt(emptyCell.dataset.row), parseInt(emptyCell.dataset.col))) {
      // Wait for the animation to finish before showing the alert
      setTimeout(() => {
        alert(`${currentPlayer.toUpperCase()} wins!`);
        gameEnded = true;
      }, 500); // Adjust delay as needed
    } else {
      currentPlayer = (currentPlayer === 'red') ? 'yellow' : 'red';
    }
  }
});

// Function to get the lowest empty cell in a column
function getEmptyCellInColumn(col) {
  const cells = document.querySelectorAll(`.cell[data-col="${col}"]`);
  for (let i = cells.length - 1; i >= 0; i--) {
    if (!cells[i].classList.contains('red') && !cells[i].classList.contains('yellow')) {
      return cells[i];
    }
  }
  return null; // If column is full
}

// Function to check for a win
function checkWin(row, col) {
  const directions = [
    { dr: 1, dc: 0 },   // Vertical
    { dr: 0, dc: 1 },   // Horizontal
    { dr: 1, dc: 1 },   // Diagonal (upwards)
    { dr: 1, dc: -1 }   // Diagonal (downwards)
  ];

  for (let dir of directions) {
    let count = 1; // Count of consecutive discs
    let r, c;

    // Check in positive direction
    r = row + dir.dr;
    c = col + dir.dc;
    while (r >= 0 && r < ROWS && c >= 0 && c < COLS &&
           board.children[r * COLS + c].classList.contains(currentPlayer)) {
      count++;
      r += dir.dr;
      c += dir.dc;
    }

    // Check in negative direction
    r = row - dir.dr;
    c = col - dir.dc;
    while (r >= 0 && r < ROWS && c >= 0 && c < COLS &&
           board.children[r * COLS + c].classList.contains(currentPlayer)) {
      count++;
      r -= dir.dr;
      c -= dir.dc;
    }

    // Check if count >= 4
    if (count >= 4) {
      highlightWinningCells(row, col, dir.dr, dir.dc);
      return true;
    }
  }

  return false;
}

// Function to highlight the winning cells
function highlightWinningCells(row, col, dr, dc) {
  let r = row;
  let c = col;
  const cellsToHighlight = [];

  // Add the winning cells to highlight
  while (r >= 0 && r < ROWS && c >= 0 && c < COLS &&
         board.children[r * COLS + c].classList.contains(currentPlayer)) {
    cellsToHighlight.push(board.children[r * COLS + c]);
    r += dr;
    c += dc;
  }

  // Highlight the winning cells with a delay
  cellsToHighlight.forEach((cell, index) => {
    setTimeout(() => {
      cell.classList.add('winning');
    }, index * 100);
  });
}

// Function to reset the game
function resetGame() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.className = 'cell');
  currentPlayer = 'red';
  gameEnded = false;
}
