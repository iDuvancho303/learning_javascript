// Conditional statements

var x = 10;
var y = 50; 


// Using EQUAL statement

if (x == 10) {
    console.log("That\'s correct!"); // returns -> that's correct because x is equal to 10
}

// Using OR 

if (x == 5 || y == 50) {
    console.log('Yes, one value is correct'); // returns -> Yes, one value is correct because at least one statemen is true
}

// Using AND statement

if ( x == 10 && y == 40) {
    console.log('True');
} else {
    console.log('False'); // returns -> false because both statements are not true
}


// Examples

let gender1 = "Male";
let gender2 = "Female"
const age  = 21;

if (gender1 == 'Male' && age >= 21) {
    console.log('Welcome my good Sir.');
} else {
    console.log('Sorry, you are under age');
} else if (gender2 == 'Female' && age >= 21) {
    console.log('Welcome Madam!');
} 
