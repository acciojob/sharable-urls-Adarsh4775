// your code here
const nameInput = document.getElementById("name");
const yearInput= document.getElementById("year");
const Button = document.getElementById("button");
const URL = document.getElementById("url");

Button.addEventListener("click", function(){
let	name = nameInput.value;
let	year =  yearInput.value;

	let newURL = 'https://localhost:8080/?name=' + name + '&year=' + year;

	URL.textContent = newURL;
	
});
