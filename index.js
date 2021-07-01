

let sumEl = document.getElementById("sum-el");

let saveEl = document.getElementById("save-el");

function deal(){
	let firstCard = Math.round(Math.random()*9 +2);
	let secondCard = Math.round(Math.random()*9 +2);
	let newSum = firstCard + secondCard;
	sumEl.textContent = newSum;
}



function save() {
	let sumStr = sumEl.textContent + "  ";
	saveEl.textContent += sumStr; 

	 sum = "Hit me!";
	 sumEl.textContent = sum;
	console.log(sumStr);
}
