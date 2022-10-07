// Objects 

let person1 = new Object(); // first letter is always uppercase

person1.name = "Carlos";
person1.age = 25;
person1.eyeColor = "Brown";
person1.updateAge = function() {   // using a method inside an object
    return  ++person1.age;
}

console.log(person1.age); // returns -> 25

person1.updateAge();

console.log(person1.age) // returns -> 26 


// Simpler way to create objects 

let person = {
    name: "Melanie",
    age: 10,
    eyeColor: "Brown",
    updateAge: function() {
        return ++person.age;
    }
}


// How to create object constructors

// Camel Notation -> oneTwoThreeFour
// Pascal Notation -> OneTwoThreeFour (start with uppercase letter)
 
function People(name, eyeColor, age) { // start with uppercase 
    this.name = name; // we use the keyword "This" to refer to the object.
    this.eyeColor = eyeColor;
    this.age = age;
    this.updateAge = function() {  // creating a method inside an object
        return ++this.age;
    };
}

let person01 = new People("Emily", "Green", 25);

console.log(person01.eyeColor); // returns -> green

console.log