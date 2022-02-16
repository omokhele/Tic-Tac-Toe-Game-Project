// Declaring variables

let playerX = "X";
let playerO = "O";

let playerTurn = playerX;

let gameOver = false;

// Query Selectors

// playerTurn === playerX ? playerO : playerX;
//     return playerTurn;

let gridItems = document.querySelectorAll(".gridItem");
// gridItems = Array.from(gridItems)
// console.log(gridItems);

// gridItems.forEach(function (gridItem){
//     gridItem.addEventListener('click', function (){
//         if(gridItem.innerHTML != "") {
//             return 0;
//         }
//         else {
//         gridItem.innerHTML = playerTurn; 
//         playerTurn = playerTurn === playerX ? playerO : playerX;
//         return playerTurn;
//         }
// })
    


// });



const reset = document.querySelector(".restart")
const nameField = document.querySelector("#nameField");
const play = document.querySelector(".play");

let gameWon = document.querySelector("#gameWon");
let gameLost = document.querySelector("#gameLost");


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

