let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");

function startGame() {
  sumEl.textContent += -" " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function endGame() {
  messageEl.textContent = "Want to play a round?";
  sumEl.textContent = "sum: ";
}
