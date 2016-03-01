var x;
var y;
var calculate; 
var answer;



 x = document.querySelector('#num_one');
 y = document.querySelector('#num_two');
 calculate = document.querySelector('#calculateBtn');
 answer = document.querySelector('#answer');


function multiplyNumbers () {
	return(Number(x.value) * Number(y.value)); 
}

function displayAnswer () {
	answer.textContent = multiplyNumbers();
}

calculate.addEventListener("click", displayAnswer);