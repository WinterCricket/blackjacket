



let firstCard = Math.round(Math.random()*9 +2);
let secondCard = Math.round(Math.random()*9 +2);

let sum = firstCard + secondCard;


let sumEl = document.getElementById("sum-el");

let saveEl = document.getElementById("save-el");

function deal(){
	sumEl.textContent = sum;
}



function save() {
	let sumStr = sum + "    ";
	saveEl.textContent += sumStr; 
	sum = 0;
	sumEl.textContent = sum;
 }