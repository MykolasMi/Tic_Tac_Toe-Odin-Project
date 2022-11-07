const boardDiv = document.querySelector('.gameboard');
const header = document.querySelector('.upperText');
const nickname1 = document.querySelector('#nickname1');
const nickname2 = document.querySelector('#nickname2');
const startButton = document.querySelector('#startButton');
const greetingContainer = document.querySelector('.greetingContainer');
const container = document.querySelector('.container');
const restartButton = document.querySelector('.restart');
const winContainer = document.querySelector('.winContainer');

const gameboard = (() => {
    let player1Turn = true;
    let mark;

    const board = ["", "", "", "", "", "", "", "", ""];

    startButton.addEventListener('click', function(e) {
        e.preventDefault();
        displayTurn();
        greetingContainer.classList.toggle('hide');
        container.classList.toggle('hide');
    })

    restartButton.addEventListener('click', function(e) {
        restart();
    })

    const restart = () => {
        for (let i=0; i<board.length; i++) {
            board.splice([i], 1, '');
            const squares = document.querySelectorAll('.square')
            squares[i].textContent = '';
        }
            player1Turn = true;
            displayTurn();
    }

    const displayTurn = () => {
        if (player1Turn == true) {header.textContent = (`${nickname1.value}'s turn`)}
        else {header.textContent = (`${nickname2.value}'s turn`)}
    }

    const checkWin = (mark) => {
        for(let i=0; i<3; i++) {
            //row check
            if(board[i] == board[i+1] && board[i+1] == board[i+2]) {
                if(board[i] != '' && board[i+1] != '' && board[i+2] != '') {
                    if (mark == "X") {
                        announceWinner(nickname1.value);
                        break
                    }
                    if (mark == "O") {
                        announceWinner(nickname2.value);
                        break
                    }
                }
            }
            //column check
            if(board[i] == board[i+3] && board[i+3] == board[i+6]) {
                if(board[i] != '' && board[i+3] != '' && board[i+6] != '') {
                    if (mark == "X") {
                        announceWinner(nickname1.value);
                        break
                    }
                    if (mark == "O") {
                        announceWinner(nickname2.value);
                        break
                    }
                }
            }

        }
        //diagonal check
        if(board[0] == board[4] && board[4] == board[8]) {
            if (board[0] != '' && board[4] != '' && board[8] != '') {
                if (mark == "X") {
                    announceWinner(nickname1.value);
                }
                if (mark == "O") {
                    announceWinner(nickname2.value);
                }
            }
        }
        if(board[2] == board[4] && board[4] == board[8]) {
            if (board[2] != '' && board[4] != '' && board[8] != '') {
                if (mark == "X") {
                    announceWinner(nickname1.value);
                }
                if (mark == "O") {
                    announceWinner(nickname2.value);
                }
            }
        }

        /*
        let i=0
        i++;
        console.log(i);
        if (i>8) {
            console.log(i);
            console.log('ALL OCCUPIED')
            //draw
        } SUTVARKYTI, REIK KAZKOKIO WHILE BBZ
        */
    }

    const announceWinner = (winner) => {
        winContainer.classList.toggle('hide');
        const winText = document.querySelector('winText');
        winText.textContent = (`${winner} HAS WON THE GAME!`)
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
            displayTurn();
        })
        }
    }

    const decideTurn = () => {
        if (player1Turn == true) {
            player1Turn = false;
        }
        else {
            player1Turn = true;
        }
    }

    return {board, display}
})()

gameboard.display();