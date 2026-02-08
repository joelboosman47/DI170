let sbutton = document.getElementById("jsstyle");

sbutton.addEventListener("click", makeRed);
sbutton.addEventListener("mouseover", makeLarge);
sbutton.addEventListener("mouseout", makeSmall);

function makeRed(e) {
	e.target.style.color == "red"
		? (e.target.style.color = "black")
		: (e.target.style.color = "red");
}

function makeLarge(e) {
	e.target.style.fontSize = "1.5rem";
}

function makeSmall(e) {
	e.target.style.fontSize = "1rem";
}
