// VARIABLES

// Using LET
let myName = 'Duvan'; // cannot be a reserved keyword

console.log(myName); // returns "Duvan"

let name = 'Mosh'; // string literal
let age = 30; // number literal
let isApproved = true; // boolean literal


// Using  CONST
const interestRate = 3.5; // const variales cannot be reassign 

console.log(interestRate); // returns 3.5

// OBJECTS
let person = {
    name: 'Duvan',
    age: 32,
};

person.age = 44; // changing the value of age using dot notation

console.log(person.age);

// Different data types

// String data type
var name10 = 'Melanie'; // string

var name2 = 'Her name \"is"\ Melanie';

console.log(name2); // returns -> Her name "is" Melanie

// Numeric data type

var number1 = 123456;

var number2 = 15.7;

var number3 = -33.3;

// Boolean data type 

var bool = true;

var bool2 = false;

// undefined data

var color; // no value assigned to the variables YET

// Null data type

var color2 = null;

console.log(color2); // returns null , no value


// Local variables

function example() {
    var b = 20; // variable is inside the function
}

console.log();  


// Global variables

var two = 30; // variable  outside the function

function examples2() {
    return ;
}

// We have function scopes

// Block scopes such as IF statements

// You can't call a variables inside a funcition but you can from block scopes


// What CONST does compare to LET variables

const examples3 = 20;

console.log(examples3); // returns -> 20
/*
const examples3 = 120 ; 

console.log(examples3); // returns -> error
*/