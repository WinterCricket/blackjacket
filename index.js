

let sumEl = document.querySelector("#sum-el");

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
	// let fourthCard = Math.round(Math.random()*9 +2);
	// let fifthCard = Math.round(Math.random()*9 +2);
	let sum = firstCard + secondCard + thirdCard;
	
	if(sum <= 20){
		
		return message = "Want a card?";
		  sumEl.textContent = message;
	} else if (sum === 21 ) {
			return message = "BlackJacket.";
			 hasBlackJack = true;
			 sumEl.textContent = message;

		} else {
				return message = "You went over. You're out.";
				isAlive = false;
				 messageEl.textContent = message;
			}
		

}
	
console.log(startGame());
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

