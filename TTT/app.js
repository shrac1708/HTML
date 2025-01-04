const board = document.getElementById('board');
const resetBtn = document.getElementById('resetBtn');
const message = document.getElementById('message');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function createBoard() {
    board.innerHTML = '';
    gameBoard.forEach((cell, index) => {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.textContent = cell;
        div.addEventListener('click', () => handleCellClick(index));
        board.appendChild(div);
    });
}

function handleCellClick(index) {
    if (gameBoard[index] || !gameActive) return;

    gameBoard[index] = currentPlayer;
    createBoard();
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            message.textContent = `${currentPlayer} wins!`;
            return;
        }
    }

    if (!gameBoard.includes('')) {
        gameActive = false;
        message.textContent = 'It\'s a draw!';
    }
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    message.textContent = '';
    createBoard();
}

resetBtn.addEventListener('click', resetGame);

createBoard();
