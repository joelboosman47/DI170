/* Instructions
Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.

In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).

The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
Allow the user to delete a specific gif by clicking the DELETE button.
Allow the user to remove all of the GIFs by clicking a DELETE ALL button.
 */

// API key. Normally this should be saved as an environment variable, but since we are doing purely front-end (and this is just an exercise), we will save the API as a variable in the code (not save, I know!).
const APIKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

async function fetchGifURL(cat) {
	try {
		const resp = await fetch(
			`https://api.giphy.com/v1/gifs/random?api_key=${APIKey}&tag=${cat}`,
		);
		const data = await resp.json();
		console.log(`The category is ${cat}`);
		console.log(`Fetched this GIF url: ${data.data.images.fixed_height.url}`);
		return data.data.images.fixed_height.url;
	} catch (error) {
		console.log(`Oops! An error occured: ${error}`);
	}
}

const searchBtn = document.getElementById("searchBtn");
const deleteAll = document.getElementById("deleteAll");
const searchBar = document.getElementById("search");
const results = document.getElementById("results");
let nrOfGifs = 0;
const hideButton = () => {
	deleteAll.classList.add("hidden");
};
const showButton = () => {
	deleteAll.classList.remove("hidden");
};

async function addGif(event) {
	event.preventDefault();
	const searchVal = searchBar.value.trim();

	if (!searchVal) {
		alert("Please enter a search category.");
		return;
	}

	try {
		const gifURL = await fetchGifURL(searchVal);

		if (gifURL) {
			// Create a container for the GIF and its delete button
			const gifContainer = document.createElement("div");
			gifContainer.style.display = "inline-block";
			gifContainer.style.margin = "10px";

			// Create the GIF image
			const newGif = document.createElement("img");
			newGif.src = gifURL;
			newGif.alt = `GIF for ${searchVal}`;
			newGif.style.maxWidth = "200px"; // Optional: limit size for better layout

			// Create the delete button
			const deleteBtn = document.createElement("button");
			deleteBtn.textContent = "×";
			deleteBtn.addEventListener("click", () => {
				results.removeChild(gifContainer); // Remove the entire container
				--nrOfGifs;
				if (nrOfGifs < 2) hideButton();
			});

			// Append image and button to the container, then container to results
			gifContainer.appendChild(newGif);
			gifContainer.appendChild(deleteBtn);
			results.appendChild(gifContainer);
			++nrOfGifs;
			searchBar.value = "";
			if (nrOfGifs >= 2) showButton();
		} else {
			alert("No GIF found for that category. Try a different search.");
		}
	} catch (error) {
		console.error("Error fetching GIF:", error);
		alert("Failed to fetch GIF. Check the console for details.");
	}
}

searchBtn.addEventListener("click", addGif);
searchBar.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		addGif(e);
	}
});
deleteAll.addEventListener("click", (e) => {
	e.preventDefault();
	// Clear all inner HTML
	results.innerHTML = "";

	// Update counter and hide button
	nrOfGifs = 0;
	hideButton();
});
