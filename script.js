let playerX = "X";
let playerO = "O";

let playerTurn;

const gridItem = document.querySelectorAll(".gridItem");
const reset = document.querySelector(".restart")
const nameField = document.querySelector("#nameField");
const play = document.querySelector(".play");

// let userName = window.prompt("What's your name?");

document.getElementById("enter1").onclick = function(){
    // let userName = nameField.value
    let userName1 = document.getElementById("nameField1").value;

    console.log("Hello " + userName1);
}
document.getElementById("enter2").onclick = function(){
let userName2 = document.getElementById("nameField2").value;
    console.log("Hello " + userName2);
}

// const board = Array(gridItem.length);
// console.log(board);

// gridItems.forEach((gridItem) => gridItem.addEventListener(click, () => {
//     let add = playerX + add;

for (let i = 0; i < 9; i++) {
    
    if(playerTurn === playerX){
    gridItem.innerText = playerX;
    }
    else if (playerTurn === playerO) {
        gridItem.innerText = playerO;
    
    }
    
}
        