function hello() {
    console.log("Hello World!");
}

// function default value
function helloSomeone(name="John") {
    console.log("Hello " + name);
}

function addNum(num1, num2) {
    console.log(num1 + num2);
}

// returning a value
function formal(name="Sam", title="Sir") {
    console.log(title + " " + name);
    return title + " " + name;
}

function timesFive(num) {
    var result = num * 5;
    return result;
}

// global and local scope
var v = "GLOBAL V"
var stuff = "GLOBAL STUFF"

function fun(stuff) {
    console.log(v);
    stuff = "Reassigning stuff inside fun";
    console.log(stuff);
}

fun();
console.log(stuff);