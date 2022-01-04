querySelector;

let player = {
  name: "Roddy",
  chips: 140,
};

let saveEl = document.getElementById("save-el");
let messageEl = document.getElementById("message-el");
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sum = 0;

let cards = [];
let sumEl = document.querySelector("sum-el");

let cardsEl = document.querySelector("cards-el");

//oop

let playerEl = document.querySelector("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Want another card?";
    isAlive = true;
  } else if (sum === 21) {
    message = "BlackJacket!";
    hasBlackJack = true;
  } else {
    message = "You went over. You're out of the game.";

    isAlive = false;
  }

  messageEl.textContent = message;
  //sumEl.textContent = "Sum: "+sum;
}

function newCard() {
  if (isAlive && hasBlackJack === false) {
    let card = getRandomCard();

    sum += card;
    cards.push(card);
  }

  renderGame();
}

function startGame() {
  let isAlive = true;

  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  cards = [firstCard, secondCard];

  sum = firstCard + secondCard;

  renderGame();
}
