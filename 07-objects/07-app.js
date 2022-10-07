// Objects 

let person1 = new Object();

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
