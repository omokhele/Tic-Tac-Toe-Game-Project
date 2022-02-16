// Declaring variables

let playerX = "X";
let playerO = "O";

let playerTurn = playerO;

let gameOver = false;

// Query Selectors

const nextTurn = () => {
    playerTurn === playerX ? playerO : playerX;
    return playerTurn;
}

let gridItems = document.querySelectorAll(".gridItem");
gridItems = Array.from(gridItems)
console.log(gridItems);

gridItems.forEach(function (gridItem){
    gridItem.addEventListener('click', function (){
    gridItem.innerHTML = playerTurn;
    })
});



const reset = document.querySelector(".restart")
const nameField = document.querySelector("#nameField");
const play = document.querySelector(".play");

let gameWon = document.querySelector("#gameWon");
let gameLost = document.querySelector("#gameLost");


// Getting Name Input

document.getElementById("enter1").onclick = function(){
    // let userName = nameField.value
    let userName1 = document.getElementById("nameField1").value;
    alert("Hello " + userName1);
}

document.getElementById("enter2").onclick = function(){
    let userName2 = document.getElementById("nameField2").value;
    // userName2.innerHTML = userName2;
    console.log("Hello " + userName2);
}

// const board = Array(gridItem.length).fill(null);
// console.log(board);

// for (let i = 0; i <gridItem.length; i++) {
//     for (let j = 0; j < gridItem.length; j++) {
//         let grid = gridItem[j] + grid;
//         console.log(grid);
        
//     }

//     if(playerTurn === playerX){
//     gridItem.innerText = playerX;
//     }
//     else if (playerTurn === playerO) {
//         gridItem.innerText = playerO;
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

