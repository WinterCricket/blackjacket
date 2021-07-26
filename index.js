



let saveEl = document.getElementById("save-el");
let messageEl = document.getElementById("message-el");
let hasBlackJack = false;
let isAlive = true;
let message = "";

let firstCard = Math.round(Math.random()*9 +2);
let secondCard = Math.round(Math.random()*9 +2);


let sum = firstCard + secondCard;
let cards = [firstCard, secondCard];
let sumEl = document.getElementById("sum-el");
//let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

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
	

	let card = Math.round(Math.random()*9 +2);

	sum += card;
	cards.push(card);
	
	renderGame();
}



function startGame(){
	renderGame();
}


