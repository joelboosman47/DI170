// Original code:
// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
// -------------------------------------------------------------------

// Improved version:
// the url that we want to fetch
const URL = "https://www.swapi.tech/api/starships/9/";

// async function to fetch a given url and display the result in the console.
// In case of an error, also log that in the console.
async function getStarWars(url) {
	try {
		const response = await fetch(url);
		const objectStarWars = await response.json();
		console.log(objectStarWars.result);
	} catch (error) {
		console.log(`Oops! ${error}`);
	}
}

// call the function with the provided URL to test.
getStarWars(URL);
