let heading = document.querySelector("h1");
let numberEntryArea = document.querySelector(".number-entry-area");
let input = document.querySelector("#guessed-number");
let message = document.querySelector(".message")
let guessBtn = document.querySelector(".guess.btn");
let newGameBtn = document.querySelector(".new-game-btn");
let guessCountArea = document.querySelector(".guess-count-area");
let timesGuessed = document.querySelector(".times-guessed");
let guessesLeft = document.querySelector(".guesses-left");
let computerNumber;
// function getComputerNumber() {
//   let computerNumber = Math.floor(Math.random() * 26);
//   return computerNumber
// }

// main game function
function newGame() {
  // show/reset game elements at start
  heading.textContent = "Guess my number"
  numberEntryArea.style.display = "flex";
  guessCountArea.style.display = "flex";
  computerNumber = Math.floor(Math.random() * 26);
}

function guessNumber() {
  let playerNumber = parseInt(input.value);

  if (playerNumber < computerNumber) {
    message.textContent = `${playerNumber} is too low`
  } else if (playerNumber === computerNumber) {
    heading.textContent = "YOU WIN"
    numberEntryArea.style.display = "none";
    guessCountArea.style.display = "none";
    input.value = "";
    message.textContent = "";
  } else {
    message.textContent = `${playerNumber} is to hight`
  }

  console.log(`playerNumber: ${playerNumber}`)
  console.log(`computerNumber: ${computerNumber}`)
  console.log(`typeof computerNumber: ${typeof computerNumber}`)
  console.log(`input: ${input}`)
  console.log(`typeof playerNumber ${typeof playerNumber}`)
  // console.log(`computerNumber: ${computerNumber}`)
}


// TODO
// 1. Change form to just a single number input and button. This will prevent the page form refreshing, and might fix some other issues too.