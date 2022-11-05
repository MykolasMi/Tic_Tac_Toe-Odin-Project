const boardDiv = document.querySelector('.gameboard');

const gameboard = (() => {
    let player1Turn = true;
    let mark;

    const board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

    const checkWin = (mark) => {
        console.log("checkwin");
        for(let i=0; i<3; i++) {
            //row check
            if(board[i] == board[i+1] && board[i+1] == board[i+2]) {
                console.log("EVEN_ROW_TRUE");
                if (mark == "X") {
                    //player1.win;
                    console.log("X WIN")
                    break
                }
                if (mark == "O") {
                    //player2.win
                    console.log("O WIN")
                    break
                }
            }
            //column check
            if(board[i] == board[i+3] && board[i+3] == board[i+6]) {
                console.log("EVEN_COLUMN_TRUE");
                if (mark == "X") {
                    //player1.win;
                    console.log("X WIN")
                    break
                }
                if (mark == "O") {
                    //player2.win
                    console.log("O WIN")
                    break
                }
            }

        }
        //diagonal check
        if(board[0] == board[4] && board[4] == board[8]) {
            console.log("EVEN_LTR_DIAGONAL_TRUE");
            if (mark == "X") {
                //player1.win;
                console.log("X WIN")
            }
            if (mark == "O") {
                //player2.win
                console.log("O WIN")
            }
        }
        if(board[2] == board[4] && board[4] == board[8]) {
            console.log("EVEN_RTL_DIAGONAL_TRUE");
            if (mark == "X") {
                //player1.win;
                console.log("X WIN")
            }
            if (mark == "O") {
                //player2.win
                console.log("O WIN")
            }
        }
    }

    const display = () => {
        for (let i=0; i<board.length; i++) {
        const square = document.createElement('div');
        square.textContent = board[i];
        square.classList.add("square");
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

            checkWin(mark);
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