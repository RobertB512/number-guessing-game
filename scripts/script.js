let heading = document.querySelector("h1");
let numberEntryArea = document.querySelector(".number-entry-area");
let input = document.querySelector("#guessed-number");
let message = document.querySelector(".message")
let guessBtn = document.querySelector(".guess.btn");
let newGameBtn = document.querySelector(".new-game-btn");
let statsArea = document.querySelector(".stats-area");
let guessesLeft = document.querySelector(".guesses-left");
// let gamesWonField = document.querySelector(".games-played");
// let gamesWon = 0;
let computerNumber;
let guesses = 10;


// main game function
function newGame() {
  // show/reset game elements at start
  heading.textContent = "Guess my number"
  numberEntryArea.style.display = "flex";
  message.textContent = "Pick a number from 1 to 100"
  statsArea.style.display = "flex";
  computerNumber = Math.floor(Math.random() * 100) + 1;
  guesses = 10
  guessesLeft.textContent = String(guesses);
}

function guessNumber() {
  let playerNumber = parseInt(input.value);

  if (playerNumber < computerNumber) {
    message.textContent = `${playerNumber} is too low`
  } else if (playerNumber === computerNumber) {
    heading.textContent = "YOU WIN"
    numberEntryArea.style.display = "none";
    statsArea.style.display = "none";
    input.value = "";
    message.textContent = "";
  } else {
    message.textContent = `${playerNumber} is to hight`
  }
  guesses--
  guessesLeft.textContent = String(guesses);
  if (guesses === 0) {
    heading.textContent = "GAME OVER"
    numberEntryArea.style.display = "none";
    statsArea.style.display = "none";
    input.value = "";
    message.textContent = "";
  }
  

  console.log(`playerNumber: ${playerNumber}`)
  console.log(`computerNumber: ${computerNumber}`)
  console.log(`guesses left ${guesses}`)
  console.log(`typeof computerNumber: ${typeof computerNumber}`)
  console.log(`input: ${input}`)
  console.log(`typeof playerNumber ${typeof playerNumber}`)
  // console.log(`computerNumber: ${computerNumber}`)
}


