let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let isStartTriggered = false;
let message = "";

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");

function startGame() {
  if (!isStartTriggered) {
    isAlive = true;
    isStartTriggered = true;
    initializeGame(); // Initialize the game.
  }
}

function initializeGame() {
  cards = [generateRandomCard(), generateRandomCard()]; // Generate two random cards.
  sum = calculateSum(cards);
  renderGame();
}

function generateRandomCard() {
  return Math.floor(Math.random() * 11) + 1; // Generates a random card between 1 and 11.
}

function calculateSum(cardArray) {
  return cardArray.reduce((acc, card) => acc + card, 0);
}

function renderGame() {
  cardEl.textContent = "Cards: " + cards.join(" "); // Display the cards as a string.
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
    const newCardValue = generateRandomCard();
    cards.push(newCardValue);
    sum = calculateSum(cards);

    cardEl.textContent += " " + newCardValue;
    renderGame();
  }
}

function endGame() {
  messageEl.textContent = "Want to play a round?";
  sumEl.textContent = "Sum: ";
  cardEl.textContent = "Cards: ";
  sum = 0;
  isStartTriggered = false;
  isAlive = false;
}
