var td = $('td'); 

td.each(function() {
    $(this).addClass("turnGray")
})

var dropChip = function() {
    // console.log("Row: " + $(this)[0].closest("tr").rowIndex);
    // console.log("Col: " + $(this)[0].cellIndex); 
    var colNum = $(this)[0].cellIndex
    var colChips = Object.entries(td).filter(x => x[1].cellIndex === colNum);
    grayChips = colChips.filter(x => x[1].className === 'turnGray');
    // console.log(grayChips[grayChips.length - 1][1])
    grayChips[grayChips.length - 1][1].classList.remove("turnGray");
    grayChips[grayChips.length - 1][1].classList.add("turnBlue");
}

td.each(function() {
    $(this).on("click", dropChip)
})