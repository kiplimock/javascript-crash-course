// grabbing elements by tagname
var divs = $('div');
var head = $('h1');
var listItems = $('li');

// grabbing by class name
var cont = $('.container');

// grabbing by id
var special = $('#special');

// CSS object
var newCss = {
    'color': 'white',
    'background': 'blue',
    'border': '2px solid red'
}

// change css styling
// head.css(newCss);
listItems.css('color', 'blue');

// change css styling for only one item in a list
listItems.eq(0).css('color', 'orange');
listItems.eq(-1).css('color', 'green');

// grabbing text
$('h1').text("This text was not here before!");

// grabbing the HTML
$('h1').html("<em>This text was not here before!</em>");

// attributes
$('input').eq(0).attr('value', 'Some text');
// OR
$('input').eq(0).val('Modified submit button');
$('input').eq(1).attr('type', 'radio');

// adding and removing classes
$('h1').addClass('turnRed');
$('h1').removeClass('turnRed'); 
$('h1').toggleClass('turnBlue');