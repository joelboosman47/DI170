import express, { request } from "express";
const app = express();
const port = 3000;
const data = [
	{
		id: 1,
		title: "My First Blog",
		content: "Eiusmod cillum magna ullamco nostrud dolore.",
	},
	{
		id: 2,
		title: "Welcome back to my blog",
		content: "Amet exercitation magna incididunt sint ex.",
	},
	{
		id: 3,
		title: "Another blog for you guys!!",
		content:
			"Sint commodo duis consequat culpa incididunt voluptate voluptate officia consequat aliquip..",
	},
];
app.use(express.json());

// get all blog posts
app.get("/posts", (req, res) => res.send(data));

// get a specific blog posts based on the id
app.get("/posts/:id", (req, res) => {
	const { id } = req.params;
	const blog = data.find((item) => item.id == id);
	if (!blog) {
		res.sendStatus(404);
		return;
	}
	res.status(200).json(blog);
});

// create a new blog post
app.post("/posts", (req, res) => {
	const { title, content } = req.body;

	// check that title and content are given
	if (!title || !content || content.trim() === "") {
		return res
			.status(400)
			.json({ error: "Title and content are required and can\'t be empty!" });
	}

	// generate new ID
	const newID = data.length > 0 ? data.length + 1 : 1;

	// create new post and show the new post
	const newPost = { id: newID, title: title.trim(), content: content.trim() };
	data.push(newPost);
	res.status(201).json(newPost);
});

// update an existing post
app.put("/posts/:id", (req, res) => {
	const { title, content } = req.body;

	// check that title or content are given
	if (!title && (!content || content.trim() === "")) {
		return res
			.status(400)
			.json({ error: "Title and content are required and can\'t be empty!" });
	}
	// check that there exist a blog with the id
	const { id } = req.params;
	const blog = data.find((item) => item.id == id);
	if (!blog) {
		res.sendStatus(404);
		return;
	}
	// update the relevant fields
	if (title) {
		blog.title = title;
	}
	if (content) {
		blog.content = content.trim();
	}
	res.status(200).json(blog);
});

// delete existing post
app.delete("/posts/:id", (req, res) => {
	// get a specific blog posts based on the id
	const { id } = req.params;
	const blog = data.find((item) => item.id == id);
	if (!blog) {
		res.sendStatus(404);
		return;
	}
	// if blog exists, remove it from the data
	const index = blog.id - 1;
	data.splice(index, 1);
	res.status(200).json(blog);
});

app.listen(port, () => console.log(`Blog-API listening on port ${port}!`));
