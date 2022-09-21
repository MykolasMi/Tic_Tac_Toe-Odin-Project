const boardDiv = document.querySelector('.gameboard');

const gameboard = (() => {
    let player1Turn = true;
    let mark;

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
            else if (player1Turn == true) {
                mark = "X";
            }
            else {
                 mark = "O";
            }

            board.splice([i], 1, mark)
            square.textContent = board[i];

            decideTurn();
            console.log(board);
            console.log(mark);
            console.log(player1Turn)
        })

        console.log(boardDiv)
        }
    }

    const decideTurn = () => {
        if (player1Turn == true) {
            player1Turn = false;
        }
        else {
            player1Turn = true;
        }

        console.log("work")
    }

    return {board, display}
})()

const player1 = (() => {
    //win 


    /*let player1Turn = true;
    const place = () => {
        if (player1Turn == true) {
            player1Turn = false;
        }
        else {
            player1Turn = true;
        }
    }
    return{place}*/
})()


gameboard.display()

console.log(gameboard.board);