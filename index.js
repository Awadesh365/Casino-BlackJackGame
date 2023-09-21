let firstCard = 10,
  secondCard = 4;

let cards = [firstCard, secondCard];

let sum = cards[0] + cards[1];

let hasBlackJack = false;
let isAlive = true;
let isStartTriggered = false;

let message = "";

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");

function startGame() {
  if (isStartTriggered == false) renderGame();
  isStartTriggered = true;
}

function renderGame() {
  cardEl.textContent = "Cards: " + cards[0] + " " + cards[1];

  sumEl.textContent = "Sum: " + sum;
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
function newCard() {
  if (isAlive && isStartTriggered) {
    let newCard = 3;

    sum += newCard;
    renderGame();
    cards.push(newCard);
    cardEl.textContent += " " + cards[2];
  }
}
function endGame() {
  messageEl.textContent = "Want to play a round?";
  sumEl.textContent = "sum: ";
  cardEl.textContent = "Cards: ";
  sum = 0;
  isStartTriggered = false;
  isAlive = true;
}
