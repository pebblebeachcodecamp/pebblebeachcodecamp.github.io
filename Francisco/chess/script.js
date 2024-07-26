document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('chessboard');
    const pieces = {
        'a1': '♖', 'b1': '♘', 'c1': '♗', 'd1': '♕', 'e1': '♔', 'f1': '♗', 'g1': '♘', 'h1': '♖',
        'a2': '♙', 'b2': '♙', 'c2': '♙', 'd2': '♙', 'e2': '♙', 'f2': '♙', 'g2': '♙', 'h2': '♙',
        'a7': '♟', 'b7': '♟', 'c7': '♟', 'd7': '♟', 'e7': '♟', 'f7': '♟', 'g7': '♟', 'h7': '♟',
        'a8': '♜', 'b8': '♞', 'c8': '♝', 'd8': '♛', 'e8': '♚', 'f8': '♝', 'g8': '♞', 'h8': '♜'
    };
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

    function createBoard() {
        board.innerHTML = ''; // Limpiar el tablero antes de crear uno nuevo
        ranks.forEach(rank => {
            files.forEach(file => {
                const square = document.createElement('div');
                square.classList.add('square', (files.indexOf(file) + ranks.indexOf(rank)) % 2 === 0 ? 'white' : 'black');
                square.id = file + rank;
                square.textContent = pieces[square.id] || '';
                square.addEventListener('click', () => onSquareClick(square));
                board.appendChild(square);
            });
        });
    }

    let selectedPiece = null;
    let selectedSquare = null;

    function onSquareClick(square) {
        if (selectedPiece) {
            movePiece(square);
        } else if (square.textContent) {
            selectPiece(square);
        }
    }

    function selectPiece(square) {
        selectedPiece = square.textContent;
        selectedSquare = square;
        square.classList.add('selected');
    }

    function movePiece(targetSquare) {
        if (targetSquare !== selectedSquare) {
            targetSquare.textContent = selectedPiece;
            selectedSquare.textContent = '';
            selectedSquare.classList.remove('selected');
        }
        selectedPiece = null;
        selectedSquare = null;
    }

    createBoard();
});
