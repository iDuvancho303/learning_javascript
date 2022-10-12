 let getElement = document.querySelector(".box1");

 let createNewElement = document.createElement("h2")

 let date = new Date();
 let currentHour = date.getHours();

 let createMessage;

 if (currentHour >= 5 && currentHour <= 10) {
    createMessage = 'Good Morning:)';
 } else if (currentHour > 10 && currentHour <= 12) {
    createMessage = 'Almost time for lunch';
 } else if 