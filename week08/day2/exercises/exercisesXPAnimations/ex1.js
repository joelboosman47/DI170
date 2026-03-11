// // Using this HTML code:
// // <!DOCTYPE html>
// // <html>

// // <head>
// //     <style>
// //         p {
// //             background: yellow;
// //             color: red;
// //         }
// //     </style>
// // </head>

// // <body>
// //     <div id="container"></div>
// //     <button id="clear">Clear Interval</button>
// // </body>
// // <script src="ex1.js"></script>

// // </html>

// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
setTimeout(() => {
	alert("Hello World!");
}, 2000);

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
const div = document.getElementById("container");

const addPar = () => {
	const p = document.createElement("p");
	p.innerHTML = "Hello World";
	div.appendChild(p);

	// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
	if (div.childElementCount === 5) {
		clearInterval(intervalID);
	}
};

setTimeout(addPar, 2000);

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
let intervalID = setInterval(addPar, 2000);

// The interval will be cleared (ie. clearInterval), when the user will click on the button.
const button = document.getElementById("clear");
button.addEventListener("click", () => {
	clearInterval(intervalID);
});
