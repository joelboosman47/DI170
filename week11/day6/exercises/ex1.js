// the url that we want to fetch
const URL =
	"https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

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
