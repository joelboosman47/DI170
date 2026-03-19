import express from "express";
import fetchPosts from "./data/dataService.js";

const app = express();
const port = 5000;

// get post(s) based on the postId
app.get("/fetch/:postId", async (req, res) => {
	// since my fetchPosts module uses an async function, this callback also has to be async
	const { postId } = req.params;
	try {
		const response = await fetchPosts(postId); // fetchPost returns a promise, so we use await to resolve it
		// check if the resonse contains any data
		if (Object.keys(response).length === 0) {
			res.status(404).json(`Post with id: ${postId} is not found`);
			return;
		}
		res.status(200).json(response);
		console.log(
			`Data has been successfully retrieved: ${JSON.stringify(response)}`,
		);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
});

app.listen(port, () => console.log(`Crud-API listening on port ${port}!`));
