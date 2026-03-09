// Read carefully the documention to understand all the possible queries that the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.

// the url that we want to fetch
const URL =
	"https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// async function to fetch a given url and display the result in the console.
// In case of an error, also log that in the console.
async function getGif(url) {
	try {
		const resp = await fetch(url);
		const data = await resp.json();
		console.log(data);
	} catch (error) {
		console.log(`Oops! ${error}`);
	}
}

// call the function with the provided URL to test.
getGif(URL);
