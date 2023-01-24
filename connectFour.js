var td = document.querySelectorAll("td");
var button = document.querySelector(".btn");

function clearBoard() {
    // reset the colour of all chips
    td.forEach(element => {
        element.removeAttribute("class");
        element.classList.add("turnGray");
    });
    // reset the current player to player one
    playerOne();
}

clearBoard();

//  function to sign up the players
var first = "";
var second = "";
function signUp() {
    setTimeout(() => {
        first = prompt("Player one, please enter your name. You will be blue.");
        second = prompt("Player two, please enter your name. You will be red.");
    });
}
// console.log(first);

// function to switch to player 1
function playerOne() {
    $("#player").text(first + ", its your turn to play");
 }

 // function to switch to player 2
 function playerTwo() {
    $("#player").text(second + ", its your turn to play");
 }

 // function to return indices to check for win
function range(index, range) {
    indices = [];

    // the furthest chip is never more than 3 chips from
    // the current chip
    for (let i = -3; i < 4; i++) {
        indices.push(index + i * range);
    }

    // chip indices must be between 1 and 41 inclusive
    indices = indices.filter(x => x >= 1 && x <= 41);
    return [indices.slice(0, 4), indices.slice(-4)];
}

// function to check for winning combinations
function checkWin(currentChip) {

    // check vertial win (diff = 7)
    // 2,9,16,23,30,37

    // the chip that was just played
    var index = parseInt(currentChip[0]);
    console.log("You played chip " + index);
    
    var chips = [];
    for (let i = 0; i < 2; i++) {
        innerArray = [];
        for (let x of range(index, 7)[i]) {
            innerArray.push(td[x].className);
            // console.log(td[x].className);
        }
        chips.push(innerArray);
    }

    console.log(chips);
    var blue = chips[0].filter(x => x === "turnBlue").length === 4 || chips[1].filter(x => x === "turnBlue").length === 4;
    var red = chips[0].filter(x => x === "turnRed").length === 4 || chips[1].filter(x => x === "turnRed").length === 4;
    // console.log("Blue: " + blue);

    if (blue) {
        return true;
    } else if (red) {
        return true;
    }
    // return blue || red;

    // check horizontal win (diff = 1)

    // check diagonal win (diff = 6 or 8)
}

// function to return the css class of the lowest chip in the column
function dropChip() {
    var player = "Player 1";
    signUp();
    td.forEach(element => {
        
        element.addEventListener("click", function() {
            var colNum = 0;
            var grayChips = [];
            var colChips = [];
            // console.log(player);

            colNum = $(this)[0].cellIndex;
            colChips = Object.entries(td).filter(x => x[1].cellIndex === colNum);
            grayChips = colChips.filter(x => x[1].className === 'turnGray');
            if (grayChips.length >= 1) {
                var lowestChip = grayChips[grayChips.length - 1];
                // $(lowestChip[1]).removeClass("turnGray");

                if (player === "Player 1") {
                    console.log(lowestChip);
                    $(lowestChip).removeClass("turnGray").addClass("turnBlue");
                    checkWin(lowestChip);
                    player = "Player 2";
                    playerTwo();
                } else if (player === "Player 2") {
                    console.log(lowestChip);
                    $(lowestChip).removeClass("turnGray").addClass("turnRed");
                    checkWin(lowestChip);
                    player = "Player 1";
                    playerOne();
                }
            }
            else {
                console.log("column full")
            }
        }) 
    })
}

dropChip();


button.addEventListener("click", clearBoard);