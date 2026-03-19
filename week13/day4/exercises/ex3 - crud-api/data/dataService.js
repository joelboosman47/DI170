import axios from "axios";

// axios works promise based, so we create an async function that uses await to resolve the promise
async function fetchPosts(postId) {
	try {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${postId}`,
		);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error; // Re-throw to propagate the error
	}
}

// export as default, since this module contains only this function to export.
export default fetchPosts;
