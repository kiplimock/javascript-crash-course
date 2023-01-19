// mouse click events
$('h1').click(function() {
    console.log("Clicked!");
    // this keyword
    $(this).text("You clicked me, so I changed the text!")
});

$('li').eq(0).click(function() {
    console.log("An li was clicked");
})

// KEY PRESS
$('input').eq(0).keypress(function(event) {
    if (event.which === 13) {
        $('h3').toggleClass('turnBlue');
        console.log("You pressed the Enter key");
    }
})

// on() method and events
$('h1').on('dblclick', function() {
    $(this).toggleClass('turnRed');
})

$('h1').on('mouseenter', function() {
    $(this).toggleClass('turnRed');
}) 

// EVENTS AND ANIMATIONS
$('input').eq(1).on('click', function() {
    $('.container').fadeOut(3000);
})