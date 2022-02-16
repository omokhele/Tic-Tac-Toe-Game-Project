// Declaring variables

const playerX = "X";
const playerO = "O";
let playerTurn = playerX;
let gameOver = false;


let playerXCounter = 0;
let playerOCounter = 0;
// let win;


const reset = document.querySelector(".restart")
const nameField = document.querySelector("#nameField");
const play = document.querySelector(".play");

let gameWon = document.querySelector("#gameWon");
// let gameLost = document.querySelector("#gameLost");
let gridItems = document.querySelectorAll(".gridItem");

// playerTurn === playerX ? playerO : playerX;
//     return playerTurn;


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

// syntax for creating array from the 3X3 grid

gridItems = Array.from(gridItems)
console.log(gridItems);

// make the grid clickable and take input

gridItems.forEach(function (gridItem){
gridItem.addEventListener('click', function (){

// check if the grid is empty. If not empty make it not clickable 

        if(gridItem.innerHTML != "") {
            return 0;
        }
        else {
        gridItem.innerHTML = playerTurn; 
        checkWin ();

// alternate the xs and the os on the board on click

        playerTurn = playerTurn === playerX ? playerO : playerX;
        return playerTurn;
        }

        
});

const checkWin = () => {

    // const winCombo = [ 
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    //     [0, 3, 6],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [0, 4, 8],
    //     [2, 4, 6],
    // ];
    
    if (playerTurn == gridItem[0] && 
        gridItem[0] == gridItem[1] && 
        gridItem[0] == gridItem[2])
    {
        console.log("Winner");
    }
    
} 
});


// Restart Game Function Check
// reset.removeEventListener('click', function(){
// if ((gameOver === gameWon) || (gameOver === gameLost) || (gameOver === gameTie)) {
//     return true;
// }
// });

// gridItem.addEventListener('click', () => {




