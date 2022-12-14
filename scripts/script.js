let heading = document.querySelector("h1");
let numberEntryArea = document.querySelector(".number-entry-area");
let input = document.getElementById("guessed-number");
let message = document.querySelector(".message")
let guessBtn = document.querySelector(".guess.btn");
let newGameBtn = document.querySelector(".new-game-btn");
let statsArea = document.querySelector(".stats-area");
let guessesLeft = document.querySelector(".guesses-left");
let gamesPlayedField = document.querySelector(".games-won");
let gamesPlayed = 0;
let gamesWon = 0;
let computerNumber;
let guesses = 10;



// main game function
function newGame() {
  // show/reset game elements at start
  ++gamesPlayed
  computerNumber = Math.floor(Math.random() * 100) + 1;
  heading.textContent = "Guess my number";
  numberEntryArea.style.display = "flex";
  newGameBtn.style.display = "none"
  message.textContent = `Pick a number from 1 to 100`;
  statsArea.style.display = "flex";
  guesses = 10;
  guessesLeft.textContent = String(guesses);
  gamesPlayedField.textContent = `${gamesWon}/${gamesPlayed}`;
}

function guessNumber() {
  let playerNumber = parseInt(input.value);
  if (isNaN(playerNumber) || playerNumber < 1 || playerNumber > 100) {
    message.textContent = "Pick a number from 1 to 100"
  } else if (playerNumber < computerNumber) {
    message.textContent = `${playerNumber} is too low`
    guesses--;
  } else if (playerNumber === computerNumber) {
    gamesWon++;
    heading.textContent = "YOU WIN";
    numberEntryArea.style.display = "none";
    statsArea.style.display = "none";
    newGameBtn.style.display = "block";
    input.value = "";
    message.textContent = "";
    guesses--;
  } else {
    message.textContent = `${playerNumber} is to high`;
    guesses--;
  }
  guessesLeft.textContent = String(guesses);
  if (guesses === 0) {
    heading.textContent = "GAME OVER";
    numberEntryArea.style.display = "none";
    statsArea.style.display = "none";
    newGameBtn.style.display = "block";
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


