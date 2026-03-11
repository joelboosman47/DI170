// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below:
// <body>
//     <h1>Mad Libs</h1>

//     <form id="libform">
//         <label for="noun">Noun:</label><input type="text" id="noun"><br>
//         <label for="adjective">Adjective:</label><input type="text" id="adjective"><br>
//         <label for="person">Someone's Name:</label><input type="text" id="person"><br>
//         <label for="verb">Verb:</label><input type="text" id="verb"><br>
//         <label for="place">A place:</label><input type="text" id="place"><br>
//         <button id="lib-button" type="submit">Lib it!</button>
//     </form>

//     <p>Generated story:
//         <span id="story"></span>
//     </p>
// </body>

// 1. Select the elements (the "boxes") once at the top
const form = document.getElementById("libform");
const storyDisplay = document.getElementById("story");
const shuffleBtn = document.getElementById("shuffle");

const nounInput = form.getElementsByTagName("input")[0];
const adjInput = form.getElementsByTagName("input")[1];
const personInput = form.getElementsByTagName("input")[2];
const verbInput = form.getElementsByTagName("input")[3];
const placeInput = form.getElementsByTagName("input")[4];

// Helper function to check if any input is empty
const notEmpty = (input) => !input.some((i) => i.trim() === "");

// 2. Submit Event: The standard "Lib it!" logic
form.addEventListener("submit", (event) => {
	event.preventDefault(); // Prevents the page from refreshing

	// Grab the current values inside the event function
	const values = [
		nounInput.value,
		adjInput.value,
		personInput.value,
		verbInput.value,
		placeInput.value,
	];

	notEmpty(values)
		? writeStory(...values)
		: alert("Please fill in everything!");
});

// 3. Click Event: The Shuffle logic
shuffleBtn.addEventListener("click", () => {
	const values = [
		nounInput.value,
		adjInput.value,
		personInput.value,
		verbInput.value,
		placeInput.value,
	];

	if (!notEmpty(values)) {
		alert("Please enter all the fields first!");
		return;
	}

	const [noun, adj, person, verb, place] = values;

	const stories = [
		`Every time ${person} goes to ${place}, they bring a ${adj} ${noun} just to ${verb} with it.`,
		`Did you hear about the ${noun}? It was so ${adj}! ${person} decided to ${verb} it all the way to ${place}.`,
		`In the middle of ${place}, ${person} found a ${adj} ${noun} and started to ${verb} uncontrollably.`,
	];

	const randomIndex = Math.floor(Math.random() * stories.length);
	storyDisplay.innerText = stories[randomIndex];
});

// Helper to write the initial story
function writeStory(noun, adj, person, verb, place) {
	const story = `Once upon a time, there was a ${adj} ${noun} who loved to ${verb} with ${person} in ${place}.`;
	storyDisplay.innerText = story;
}
