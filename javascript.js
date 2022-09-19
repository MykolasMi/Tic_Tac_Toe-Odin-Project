const boardDiv = document.querySelector('.gameboard');

const gameboard = (() => {

    const board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

    const display = () => {
        for (let i=0; i<board.length; i++) {
        const square = document.createElement('div');
        square.textContent = board[i];
        boardDiv.appendChild(square);
        


        

        console.log(boardDiv)
        }
    }

    return {board, display}
})()

const player = (() => {
    
})()

gameboard.display()

console.log(gameboard.board);