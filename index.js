

let sumEl = document.getElementById("sum-el");

let saveEl = document.getElementById("save-el");
let messageEl = document.getElementById("message-el");

function deal(){
	let firstCard = Math.round(Math.random()*9 +2);
	let secondCard = Math.round(Math.random()*9 +2);
	let newSum = firstCard + secondCard;
	sumEl.textContent = newSum;

	if(newSum < 21){
		messageEl.textContent = "Want another card?";
	} else if(newSum === 21) {
		messageEl.textContent = "TWENTY-ONE!";
	} else {
		messageEl.textContent = "You have busted!";
	}
}



function save() {
	let sumStr = sumEl.textContent + "  ";
	saveEl.textContent += sumStr; 

	sum = "New deal!";
	sumEl.textContent = sum;
	console.log(sumStr);
}

