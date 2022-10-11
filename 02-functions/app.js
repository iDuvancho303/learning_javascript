
// FUNCTIONS

// Write a simple function

function colors() {
    console.log('Hello World :) '); // returns "Hello World"
}

colors(); // calling the function

// Write a function with 1 parameter

function name(name1) { // one parameter
    console.log('Hi my name is' + ' ' + name1);

}

name('Carlos'); // returns "Hi my name is Duvan";
// one argument 'Carlos'


// Write a function with 2 parameters
// performing a task

function fullName(name, lastName) {
    console.log('Hi my name is ' + '' + name + ' ' + lastName); // Returns -> Hi my name is Duvan Flores
}

fullName('Duvan' , 'Flores');


// Calculating a value

function square(number) {
    return number * number; 
}

console.log(square(3)); // returns -> 9



// More about functions 

// Name functions

function  testExample(a) {
    var greeting = 'Hola, my name ' + a ;
    return greeting; 
}

console.log(testExample('Melanie')); // returns -> Hola, my name is Melanie


// Anonymous functions

var testExample2 = function(a) {
    var greeting = 'Hi, My name is Duvan Flores ' + a;
    return greeting;
}

console.log(testExample2("Carlos")); // returns -> Hi, My name is Duvan Flores Carlos



