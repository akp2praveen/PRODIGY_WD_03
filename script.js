document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('reset-button');

    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];

    function handleClick(event) {
        const cellIndex = parseInt(event.target.id);
        if (gameBoard[cellIndex] === '' && !checkWinner()) {
            gameBoard[cellIndex] = currentPlayer;
            event.target.innerText = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            if (!checkWinner() && !gameBoard.includes('')) {
                alert('It\'s a tie!');
            }
        }
    }

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
            [0, 4, 8], [2, 4, 6]             // Diagonal
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                alert(`Player ${gameBoard[a]} wins!`);
                return true;
            }
        }
        return false;
    }

    function resetGame() {
        cells.forEach(cell => cell.innerText = '');
        currentPlayer = 'X';
        gameBoard = ['', '', '', '', '', '', '', '', ''];
    }

    cells.forEach(cell => cell.addEventListener('click', handleClick));
    resetButton.addEventListener('click', resetGame);
});