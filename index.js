

let sumEl = document.getElementById("sum-el");

let saveEl = document.getElementById("save-el");
let messageEl = document.getElementById("message-el");
let hasBlackJack = false;
let isAlive = true;
let message = "";

// function deal(){
// 	let firstCard = Math.round(Math.random()*9 +2);
// 	let secondCard = Math.round(Math.random()*9 +2);
// 	let thirdCard = Math.round(Math.random()*9 +2);
// 	let newSum = firstCard + secondCard + thirdCard;
 	//sumEl.textContent = newSum;

 	function startGame(){
 // 		if(newSum <= 20){
 // 			message = "Want another card?";
 // 			messageEl.textContent = message;
 // 		} else if(newSum === 21) {
 // 			message = "TWENTY-ONE! You may win!";
 // 			messageEl.textContent = message;
	// 	// hasBlackJack = true;
	// } else {
	// 	message = "You have busted! You're out of the game.";
	// 	messageEl.textContent = message;
	// 	// isAlive = false;
	// }





	let firstCard = Math.round(Math.random()*9 +2);
	let secondCard = Math.round(Math.random()*9 +2);
	let thirdCard = Math.round(Math.random()*9 +2);
	let fourthCard = Math.round(Math.random()*9 +2);
	let fifthCard = Math.round(Math.random()*9 +2);
	let sum = firstCard + secondCard;

	if(sum <= 17){
		let sumA = sum + thirdCard;

		sumEl.textContent = sumA;

		if (sumA <= 17 ) {
			let sumB = sumA + fourthCard;
			sumEl.textContent = sumB;
			if(sumB <= 17){
				let sumC = sumB + fifthCard;
				sumEl.textContent = sumC;
				return message = "You won with five cards!";
				messageEl.textContent = message;
			} else {
				return message = "You went over! You lose.";
				messageEl.textContent = message;
			}
		} else if (sumA > 20 || sumA < 22){
			return message = "Blackjack. Hold and win!";
			messageEl.textContent = message;
		}

		else {
			return message = "You broke your chances! You went over TWENTY-ONE.";
			messageEl.textContent = message;
		}

	}
}	

// if(newSum <= 20){
// 	message = "Want another card?";
// 	messageEl.textContent = message;
// } else if(newSum === 21) {
// 	message = "TWENTY-ONE! You may win!";
// 	messageEl.textContent = message;
// 		// hasBlackJack = true;
// 	} else {
// 		message = "You have busted! You're out of the game.";
// 		messageEl.textContent = message;
// 		// isAlive = false;
// 	}




// function save() {
// 	let sumStr = sumEl.textContent + "  ";
// 	saveEl.textContent += sumStr; 

// 	sumEl.textContent = sum;

// }

