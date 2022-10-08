// Arrays

let selectColors = ['green', 'blue']; // array literal, zero or more elements enclosed in brackets

// select/access an element of an array

console.log(selectColors[1]); // returns "blue"

// adding another element to an array

selectColors[2] = 'Yellow';

console.log(selectColors[2]); // returns "yellow"


// using a property to check the length of an array

console.log(selectColors.length); //returns 3




// Multiple arrays

const items = {
   { name: 'iphone', price: 1100},
   { name: 'Samsung', price: 900},
   { name: 'OnePlus', price: 700},
   { name: 'Motorola', price: 500}  
}

const filterItems = items.filter(())