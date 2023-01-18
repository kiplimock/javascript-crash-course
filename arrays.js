function addAwesome(name) {
    console.log(name + " is awesome!");
}

names = ['Cedric', 'Mane', 'Django', 'JavaScript'];

names.forEach(addAwesome);

for (const name of names) {
    console.log(name);
}

// For this exercise you will be making a very simple web app that 
// contains an array of student names in a .js file. The website will 
// prompt you for four possible commands: add,remove,display, and quit. 
// This web page will prompt the user for one of the commands.

var roster = [];

function addNew() {
    var name = prompt("Please enter your name: ");
    roster.push(name);
    display()
}

function removeName() {
    var name = prompt("What name do you wish to remove? ");
    index = roster.indexOf(name);
    roster.splice(index, 1);
    display()
}

function display() {
    console.log(roster);
}

function quit() {
    alert("Thank you for using the roster app!");
}

var confirm = prompt("Do you wish to start the roster app? (y/n)");
while (confirm === 'y') {

    var action = prompt("Please select an action: add, remove, display, or quit.");

    if (action === 'add') {
        addNew()
    } else if (action === 'remove') {
        removeName()
    } else if (action === 'display') {
        display();
    } else if (action === 'quit') {
        quit();
        break;
    }
}
quit();