



let saveEl = document.getElementById("save-el");
let messageEl = document.getElementById("message-el");
let hasBlackJack = false;
let isAlive = true;
let message = "";

let firstCard = getRandomCard();
let secondCard = getRandomCard();


let sum = firstCard + secondCard;
let cards = [firstCard, secondCard];
let sumEl = document.getElementById("sum-el");

let cardsEl = document.getElementById("cards-el");

function getRandomCard(){
	//return Math.round(Math.random()*9 +2);
	return Math.floor(Math.random()*9) +2;
}

function renderGame(){
	cardsEl.textContent = "Cards: " ;
for (let i = 0; i < cards.length; i++){
	
	cardsEl.textContent +=  cards[i] + " ";
}
	sumEl.textContent = "Sum: " + sum;

	if(sum <= 20){
		message = "Want another card?";

	}

	else if(sum === 21) {
		message = "BlackJacket!";


		hasBlackJack = true;
	} else {
		message = "You went over. You're out of the game.";

		isAlive = false;
	}

	messageEl.textContent = message;
	//sumEl.textContent = "Sum: "+sum;
}

function newCard(){
	

	let card = getRandomCard();

	sum += card;
	cards.push(card);
	
	renderGame();
}



function startGame(){
	renderGame();
}


