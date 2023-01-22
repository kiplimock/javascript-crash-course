var td = document.querySelectorAll("td");

td.forEach(element => {
    element.classList.add("turnGray");
});
// function to return the column clicked
// function columnClicked(elements) {
//     elements.on("click", function(event) {
//         console.log(event.target.className === "gray")
//     })
//     return elements
// }

// columnClicked(td);

// function to return the css class of the lowest chip in the column
function dropChip() {
    var player = "Player 1";
    td.forEach(element => {
        
        element.addEventListener("click", function() {
            var colNum = 0;
            var grayChips = [];
            var colChips = [];
            console.log(player);

            colNum = $(this)[0].cellIndex;
            colChips = Object.entries(td).filter(x => x[1].cellIndex === colNum);
            grayChips = colChips.filter(x => x[1].className === 'turnGray');
            if (grayChips.length >= 1) {
                var lowestChip = $(grayChips[grayChips.length - 1][1]);
                $(lowestChip).removeClass("turnGray");
                // $(lowestChip).addClass("turnBlue");

                // var nextLowestChip = $(colChips[grayChips.length])[1]

                if (player === "Player 1") {
                    $(lowestChip).addClass("turnBlue");
                    player = "Player 2";
                } else if (player === "Player 2") {
                    $(lowestChip).addClass("turnRed");
                    player = "Player 1";
                }
            }
            else {
                console.log("column full")
            }
        }) 
    })
}


dropChip();