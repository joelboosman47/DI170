// // <!DOCTYPE html>
// //     <html>
// //     <head>
// //         <style>
// //         #container {
// //           width: 400px;
// //           height: 400px;
// //           position: relative;
// //           background: yellow;
// //         }
// //         #animate {
// //           width: 50px;
// //           height: 50px;
// //           position: absolute;
// //           background-color: red;
// //         }
// //         </style>
// //     </head>
// //     <body>
// //         <p><button onclick="myMove()">Click Me</button></p>
// //         <div id="container">
// //           <div id="animate"></div>
// //         </div>
// //     </body>
// //     </html>

// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions
// Animation function for moving the box

function myMove() {
	const elem = document.getElementById("animate"); // get the little box
	const container = document.getElementById("container"); // get the yeallow box
	let pos = 0; // distance (in px) for the red box tot move
	let max = container.offsetWidth - elem.offsetWidth; // location of the border of the yellow box
	let id = setInterval(frame, 1); // repeat frame() every 1 milisecond

	function frame() {
		// once you reach the border, stop
		if (pos >= max) {
			clearInterval(id);
		} else {
			// move it one px every time
			pos++;
			elem.style.left = pos + "px";
		}
	}
}
