// Add a click event listener to the div

// Add a few event listeners to the button. With at least one click event. The event listeners should change the style of the button

// Check how the propagation works and try to prevent it

const div = document.querySelector("div");
const btn = document.getElementById("jsstyle");

div.addEventListener(
	"click",
	(e) => {
		e.target.style.border = "solid 5px blue";
	},
	true,
);

btn.addEventListener(
	"click",
	(e) => {
		e.target.style.color = "red";
		//e.stopPropagation();
	},
	true,
);

btn.addEventListener("mouseenter", (e) => {
	e.target.style.fontSize = "2rem";
});

btn.addEventListener("mouseleave", (e) => {
	e.target.style.fontSize = "1rem";
});
