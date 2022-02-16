// Declaring variables

const playerX = "X";
const playerO = "O";
let playerTurn = playerX;
let gameOver = false;


const reset = document.querySelector(".restart")
const nameField = document.querySelector("#nameField");
const play = document.querySelector(".play");

let gameWon = document.querySelector("#gameWon");
let gameLost = document.querySelector("#gameLost");
let gridItems = document.querySelectorAll(".gridItem");

// playerTurn === playerX ? playerO : playerX;
//     return playerTurn;


// syntax for creating array from the 3X3 grid

gridItems = Array.from(gridItems)
// console.log(gridItems);

// make the grid clickable and take input

gridItems.forEach(function (gridItem){
gridItem.addEventListener('click', function (){

// check if the grid is empty. If not empty make it not clickable 

        if(gridItem.innerHTML != "") {
            return 0;
        }
        else {
        gridItem.innerHTML = playerTurn; 

// alternate the xs and the os on the board on click

        playerTurn = playerTurn === playerX ? playerO : playerX;
        return playerTurn;
        }
})

});



// Getting Name Input

// document.getElementById("enter1").onclick = function(){
//     // let userName = nameField.value
//     let userName1 = document.getElementById("nameField1").value;
//     alert("Hello " + userName1);
// }

// document.getElementById("enter2").onclick = function(){
//     let userName2 = document.getElementById("nameField2").value;
//     // userName2.innerHTML = userName2;
//     console.log("Hello " + userName2);
// }


// Winnings can be detemined vertically, diagonally or horizontally.
// There are eight winning states

let horWinningCom = [
    // horizontally 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
];

    // vertically
let verWinCom = [  [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
];
    // diagonally
let diaWinCom = [
    [0, 4, 7],
    [2, 4, 6]
];


// winningCombinations.forEach(function (winningCombination){
// if (winningCombination === playerX);
// console.log(check);
// })
// }
function checkWin(playerX){
    for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
    if (horizontalWin[i][0] === horizontalWin[i][1] && horizontalWin[i][1] === horizontalWin[i][2]) {
        gameWon === horizontalWin[i][0];
        alert(gameWon);
    }
    }
}
}
// if (playerX = winningCombinations){
//     console.log("You win");
// }

// const gridItems = Array(gridItem.length).fill(null);
// console.log(gridItems);

// for (let i = 0; i < gridItems.length; i++) {
//         let grid = gridItems[i];
//         console.log(grid); 

//     if(playerTurn === playerX){
//     gridItems[i].innerHTML = playerX;
//     }
//     else {
//         (playerTurn === playerO) 
//         gridItems[i].innerHTML = playerO;
//     }

// };

// Restart Game Function Check
// reset.removeEventListener('click', function(){
// if ((gameOver === gameWon) || (gameOver === gameLost) || (gameOver === gameTie)) {
//     return true;
// }
// });

// gridItem.addEventListener('click', () => {

// })
