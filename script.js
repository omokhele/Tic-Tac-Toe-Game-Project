// Declaring variables

let playerX = "X";
let playerO = "O";

let playerTurn;

// Query Selectors

const gridItem = document.querySelectorAll(".gridItem");
const reset = document.querySelector(".restart")
const nameField = document.querySelector("#nameField");
const play = document.querySelector(".play");

let gameWon = document.querySelector("#gameWon");
let gameLost = document.querySelector("#gameLost");


// Getting Name Input

document.getElementById("enter1").onclick = function(){
    // let userName = nameField.value
    let userName1 = document.getElementById("nameField1").value;
    // console.log("Hello " + userName1);
}

document.getElementById("enter2").onclick = function(){
let userName2 = document.getElementById("nameField2").value;
    // console.log("Hello " + userName2);
}

// const board = Array(gridItem.length);
// console.log(board);

// gridItems.forEach((gridItem) => gridItem.addEventListener(click, () => {
//     let add = playerX + add;

// Input Xs and Os
for (let i = 0; i < 9; i++) {
    
    if(playerTurn === playerX){
    gridItem.innerText = playerX;
    }
    else if (playerTurn === playerO) {
        gridItem.innerText = playerO;
    
    }
    
}

// Restart Game Function Check
reset.removeEventListener('click', function(){
if ((gameOver === gameWon) || (gameOver === gameWon) || (gameOver === gameTie)) {

}
})