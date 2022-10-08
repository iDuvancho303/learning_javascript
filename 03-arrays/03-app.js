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

const items = [
    {name: "iPhone", color: "Silver", price: 1100},
    {name: "Samsung", color: "White", price: 800},
    {name: "OnePlus", color: "green", price: 700},
    {name: "Motorola", color: "gray", price: 600}
]

const filteredItems = items.filter((item) => {
    return item.price <= 700;
})

console.log(filteredItems); // returns 2 arrays with price under 700, in this case oneplus and motorola

const filteredItems2 = items.filter((clr) => {
    return clr.color === "green";
})

console.log(filteredItems2); // returns 1 arrays one plus green