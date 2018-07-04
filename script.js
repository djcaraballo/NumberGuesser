//Take and store the user input
// var userInput = document.querySelector(".number-input").value;

var guessSubmit = document.querySelector(".guess-submit");

// if (userInput) {
  
// };

// console.log("user input", userInput);

var userInput = document.querySelector(".number-input");

var output = document.querySelector(".number-output");

var clearSubmit = document.querySelector(".clear-submit");

var resetSubmit = document.querySelector(".reset-submit");

var randomNum = Math.floor((Math.random()*100)+1);

var textOutput = document.querySelector(".text-output");


guessSubmit.addEventListener("click", function() {
  output.value = userInput.value;
  var userInputValue = parseInt(userInput.value);
  if (randomNum > userInputValue) {
    textOutput.value = "That is too low!";
  } else if (randomNum < userInputValue) {
    textOutput.value = "That is too high!";
  } else if(randomNum === userInputValue) {
    textOutput.value = "BOOM!";
  }
});


clearSubmit.addEventListener("click", function() {
  userInput.value = "";
})


resetSubmit.addEventListener("click", function() {
  userInput.value = "";
  output.value = "";
  textOutput.value = "";
  randomNum = Math.floor((Math.random()*100)+1);
})











// display some text output that is dictated by the respective command, if userInput is too low or high.
// var userDisplay = function () {
//   if (userInput) > 38
// }

//listen for if ANY button is clicked
// target 

// If the guess button is clicked, a function should be executed that stores the number that was input, and pushes it to if statements.

//If mouse hovers over ANY button, it should turn pink.

//button default state is disabled
//remain in disabled state unless mouse hovers,  or it is clicked.

//only allow one button to be in clicked state at a time.

// If userInput > 38, return: "That number is too high!"


// If userInput < 38, return: "That number is too low!"


//If userInput === 38, return: "BOOM!"
