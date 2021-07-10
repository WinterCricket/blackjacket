

let sumEl = document.getElementById("sum-el");

let saveEl = document.getElementById("save-el");
let messageEl = document.getElementById("message-el");
let hasBlackJack = false;
let isAlive = true;
let message = "";

function deal(){
	let firstCard = Math.round(Math.random()*9 +2);
	let secondCard = Math.round(Math.random()*9 +2);
	let thirdCard = Math.round(Math.random()*9 +2);
	let newSum = firstCard + secondCard + thirdCard;
	sumEl.textContent = newSum;
/* 
	pseudocode

	let card = Math.round(math.random()*9+2);

	or
function deal(){
	let firstCard = Math.round(Math.random()*9 +2);
	let secondCard = Math.round(Math.random()*9 +2);
	let thirdCard = Math.round(Math.random()*9 +2);
	let fourthCard = Math.round(Math.random()*9 +2);
	let fifthCard = Math.round(Math.random()*9 +2);
	let sum = firstCard + secondCard;
	let sum2 = sum + thirdCard;
	let sum3 = sum2 + fourthCard;
	let sum4 = sum3 + fifthCard;


	if(sum <= 20){
		message = "Want another card?";
		messageEl.textContent = message;
	}

	



	function dealCard () {
		let result = sum2;
	}
	
deal another card

	if(){
	
	}




	
*/



	if(newSum <= 20){
		message = "Want another card?";
		messageEl.textContent = message;
	} else if(newSum === 21) {
		message = "TWENTY-ONE! You may win!";
		messageEl.textContent = message;
		// hasBlackJack = true;
	} else {
		message = "You have busted! You're out of the game.";
		messageEl.textContent = message;
		// isAlive = false;
	}
}



function save() {
	let sumStr = sumEl.textContent + "  ";
	saveEl.textContent += sumStr; 

	sum = "New deal!";
	sumEl.textContent = sum;
	
}

