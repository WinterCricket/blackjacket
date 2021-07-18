

let sumEl = document.getElementById("sum-el");

let saveEl = document.getElementById("save-el");
let messageEl = document.getElementById("message-el");
let hasBlackJack = false;
let isAlive = true;
let message = "";

let firstCard = Math.round(Math.random()*9 +2);
let secondCard = Math.round(Math.random()*9 +2);
let thirdCard = Math.round(Math.random()*9 +2);
	// let fourthCard = Math.round(Math.random()*9 +2);
	// let fifthCard = Math.round(Math.random()*9 +2);
	let sum = firstCard + secondCard + thirdCard;



	function startGame(){

		if(sum <= 20){
			message = "Want another card?";

		}

		else if(sum === 21) {
			message = "BlackJacket.";


			hasBlackJack = true;
		} else {
			message = "You went over. You're out of the game.";

			isAlive = false;
		}

		messageEl.textContent = message;
		sumEl.textContent = "Sum: "+sum;
	}

	



// 	let firstCard = Math.round(Math.random()*9 +2);
// 	let secondCard = Math.round(Math.random()*9 +2);
// 	let thirdCard = Math.round(Math.random()*9 +2);
// 	// let fourthCard = Math.round(Math.random()*9 +2);
// 	// let fifthCard = Math.round(Math.random()*9 +2);
// 	let sum = firstCard + secondCard + thirdCard;

// 	if(sum <= 20){

// 		return message = "Want a card?";
// 		  messageEl.textContent = message;
// 	} else if (sum === 21 ) {
// 			return message = "BlackJacket.";

// 			messageEl.textContent = message;

// 		} else {
// 				return message = "You went over. You're out.";
// 				// isAlive = false;
// 				 messageEl.textContent = message;
// 			}


// }

