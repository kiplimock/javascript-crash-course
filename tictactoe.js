var button = document.querySelector(".btn");

var cells = document.querySelectorAll("td");

// function to restart the game
function clearBoard() {
    cells.forEach(element => {
        element.textContent = '';
    })
}

// restart the game
button.addEventListener("click", clearBoard)

// toggle through X, O and blank
cells.forEach(element => {
    element.classList.add("text-center", "align-middle");

    element.addEventListener("click", function() {
        if (element.textContent === "") {
            element.textContent = "X";
        } else if (element.textContent === "X") {
            element.textContent = "O";
        } else {
            element.textContent = "";
        }
    });
});