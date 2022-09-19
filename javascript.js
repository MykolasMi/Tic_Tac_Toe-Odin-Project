const boardDiv = document.querySelector('.gameboard');

const gameboard = (() => {

    const board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

    const display = () => {
        for (let i=0; i<board.length; i++) {
        const square = document.createElement('div');
        square.textContent = board[i];
        boardDiv.appendChild(square);
        
        square.addEventListener('click', function(e) {
            if (square.textContent=="X" || square.textContent=="O") {
                return
            }
            board.splice([i], 1, "X")
            square.textContent = board[i];

            console.log(board);
        })

        console.log(boardDiv)
        }
    }

    return {board, display}
})()

const player = (() => {
    
})()

gameboard.display()

console.log(gameboard.board);