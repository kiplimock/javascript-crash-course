var td = document.querySelectorAll("td");
var button = document.querySelector(".btn");

function clearBoard() {
    // reset the colour of all chips
    td.forEach(element => {
        element.removeAttribute("class");
        element.classList.add("turnGray");
    });
    // reset the current player to player one
    console.clear();
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

// function to switch to player 1
function playerOne() {
    $("#player").text(first + ", its your turn to play");
 }

 // function to switch to player 2
 function playerTwo() {
    $("#player").text(second + ", its your turn to play");
 }

//  function to notify of player 1 winning
function playerOneWins() {
    $("#player").text(first + " wins!");
}

//  function to notify of player 1 winning
function playerTwoWins() {
    $("#player").text(second + " wins!");
}

 // function to return indices to check for win
function range(index, step, limit) {
    indices = [];

    // the furthest chip is never more than 3 chips from
    // the current chip
    for (let i = -limit; i <= limit; i++) {
        indices.push(index + i * step);
    }

    // chip indices must be between 1 and 41 inclusive
    indices = indices.filter(x => x >= 0 && x <= 41);
    // console.log(indices);
    return [indices.slice(0, 4), indices.slice(-4)];
}

// function to check for winning combinations
function checkVerticalWin(currentChip) {

    // check vertial win (diff = 7)
    // 2,9,16,23,30,37

    // the chip that was just played
    var index = parseInt(currentChip[0]);
    // console.log("You played chip " + index);
    
    var chips = [];
    for (let i = 0; i < 2; i++) {
        innerArray = [];
        for (let x of range(index, 7, 3)[i]) {
            innerArray.push(td[x].className);
            // console.log(td[x].className);
        }
        chips.push(innerArray);
    }

    var blue = chips[0].filter(x => x === "turnBlue").length === 4 || chips[1].filter(x => x === "turnBlue").length === 4;
    var red = chips[0].filter(x => x === "turnRed").length === 4 || chips[1].filter(x => x === "turnRed").length === 4;
    // console.log("Blue: " + blue);

    if (blue) {
        return true;
    } else if (red) {
        return true;
    }

    // check diagonal win (diff = 6 or 8)
}

// function to check for horizontal win
function checkHorizontalWin(currentChip) {
    // check horizontal win (diff = 1)
    var index = parseInt(currentChip[0]);
    var rowIndex = currentChip[1].closest("tr").rowIndex
    // console.log("You played chip " + index);
    
    var chips = [];
    for (let i = 0; i < 2; i++) {
        innerArray = [];
        for (let x of range(index, 1, 3)[i]) {
            // chips must be of the same row
            if (td[x].closest("tr").rowIndex === rowIndex) {
                innerArray.push(td[x].className);
            }
        }
        chips.push(innerArray);
    }

    var blue = chips[0].filter(x => x === "turnBlue").length === 4 || chips[1].filter(x => x === "turnBlue").length === 4;
    var red = chips[0].filter(x => x === "turnRed").length === 4 || chips[1].filter(x => x === "turnRed").length === 4;
    // console.log("Blue: " + blue);

    if (blue) {
        return true;
    } else if (red) {
        return true;
    }
}

// function to check diagonal win
function checkDiagonalWin(currentChip) {
    var index = parseInt(currentChip[0]);
    // console.log("You played chip " + index);
    
    var chips = [];
    // create all possible combinations of winning diagonal chips
    // from the chip just played
    for (let i = 0; i < 2; i++) {

        // diff = 6
        innerArray = [];
        for (let x of range(index, 6, 5)[i]) {
            innerArray.push(td[x]);
        }
        chips.push(innerArray);

        // diff = 8
        innerArray = [];
        for (let x of range(index, 8, 5)[i]) {
            innerArray.push(td[x]);
        }
        chips.push(innerArray);
    }

    var partOne = chips[0].concat(chips[2]);
    var partTwo = chips[1].concat(chips[3]);
    partOne = Array.from(new Set(partOne));
    partTwo = Array.from(new Set(partTwo));
    chips = [partOne, partTwo];

    // remove those chips that don't fit the 
    // mathematical criteria
    chips.forEach(item => {
        item.forEach((element, index, array) => {
            if (index+1 < item.length) {
                // diagonal elements must belong to adjacent columns
                if (Math.abs(element.cellIndex - array[index+1].cellIndex) !== 1) {
                    item.splice(index+1, 3);
                }
            }
        });
    });

    newChips = [];
    chips.forEach(item => {
        newChips.push(item.slice(0, 4), item.slice(-4));
    });

    chips = newChips

    var color = [];
    // check there is at least one combination that wins the game
    chips.forEach(item => {
        blue = item.filter(x => x.className === "turnBlue").length === 4;
        red = item.filter(x => x.className === "turnRed").length === 4;

        if (blue) {
            color.push("blue");
        } else if (red) {
            color.push("red");
        }
    });

    if (color.includes("blue") || color.includes("red")) {
        return true;
    }
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
                    player = "Player 2";
                    playerTwo();
                    if (checkVerticalWin(lowestChip) || checkHorizontalWin(lowestChip) || checkDiagonalWin(lowestChip)) {
                        playerOneWins();
                        alert(player + " wins. Refresh your browser to play again!");
                    }
                } else if (player === "Player 2") {
                    console.log(lowestChip);
                    $(lowestChip).removeClass("turnGray").addClass("turnRed");
                    player = "Player 1";
                    playerOne();
                    if (checkVerticalWin(lowestChip) || checkHorizontalWin(lowestChip) || checkDiagonalWin(lowestChip)) {
                        playerTwoWins();
                        alert(player + " wins. Refresh your browser to play again!");
                    }
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