 let getElement = document.querySelector(".box1");

 let createNewElement = document.createElement("h2")

 let date = new Date();

 let currentHour = date.getHours();
console.log(currentHour);
 let createMessage;

 if (currentHour >= 5 && currentHour <= 10) {
    createMessage = 'Good Morning:)';
 } else if (currentHour > 10 && currentHour <= 12) {
    createMessage = 'Almost time for lunch';
 } else if (currentHour > 12 && currentHour <= 18) {
    createMessage = 'Good Afternoon!';
 } else if (currentHour > 18 && currentHour <= 22) {
    createMessage = 'Good Evening :)';
 } else if (currentHour > 22 && currentHour <= 5) {
    createMessage = 'Time to go to sleep!';
 } else {
    createMessage = 'Are you from a different dimension?';
 }

