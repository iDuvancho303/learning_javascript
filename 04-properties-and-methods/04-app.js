// Properties and Methods

// Properties
// Using 'length' property

var item = 'teacher computer';

console.log(item.length); // returns -> 16









// Methods

// Using 'indexOf' 

var item2 = 'student ipad';

console.log(item2.indexOf('ip')); // returns -> 8

// Using 'substring' 

var item3 = 'student chromebook';

console.log(item3.substring(8,10)); // returns letters -> ch

// Using 'replace' 

var item4 = 'chromebook cart';

console.log(item4.replace("chromebook", "ipad")); // returns -> ipad cart

// Using 'toUpperCase'

var item5 = 'macbook';

console.log(item5.toUpperCase()); // returns -> MACBOOK

// Using 'join' 

var item6 = ['bottle', 5, true];

console.log(item6.join(' - ')); // returns -> bottle - 5 - true

// Using 'pop'

var fruits = ['Mango', 'Orange', 'watermelon', 'passion fruit'];

console.log(fruits.pop()); // returns -> passion fruit

// or
// here I used two different type of methods inside the same example

fruits.pop();
console.log(fruits.join(' - ')); // returns -> Mango - Orange

// Using 'push'

var motorcycle = ['Ducati', 'Honda', 'Kawazaki'];

motorcycle.push('Yamaha');

console.log(motorcycle); // returns -> ['Ducati', 'Honda', 'Kawazaki', 'Yamaha']

// Using .filter 

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


// Using .map 

const vegetables = [
    {name: 'banana', price: 2},
    {name: 'Mango', price: 4},
    {name: 'Watermelon', price: 5},
    {name: 'passion fruit', price: 7}
]

const filteredVeggies = vegetables.map((item2) => {
    return item2.name;
})


console.log(filteredVeggies); // returns an array with the name of all fruits.


// Using .find 

const colors = ['Yellow', 'Blue', 'Red', 'Purple', 'Pink'];

const finder = colors.find((a) => {
    return a === 'Purple';
})

console.log(finder); // returns -> purple . the first item that returns true after the statement you passed
 