import express from "express";
const app = express();
const port = 5000;

const data = [
	{
		id: 0,
		title: "The Lord of the Rings",
		author: "J. R. R. Tolkien",
		publishedYear: 1954,
	},
	{
		id: 1,
		title: "The Holy Bible",
		author: "God",
		publishedYear: -1313,
	},
	{
		id: 2,
		title: "Harry Potter",
		author: "J.K. Rowling",
		publishedYear: 1997,
	},
	{
		id: 3,
		title: "The Alchemist",
		author: "Paulo Coelho",
		publishedYear: 1988,
	},
];

// Parse body of all requests as JSON
app.use(express.json());

// Read all route to get all books
app.get("/api/books", (req, res) => res.status(200).json(data));

// Get a specific book
app.get("/api/books/:bookId", (req, res) => {
	const { bookId } = req.params;
	const book = data.find((book) => book.id == bookId);
	if (!book) {
		res.status(404).send("Book not found");
		return;
	}
	res.status(200).json(book);
});

// Create a new book and add it to the data
app.post("/api/books", (req, res) => {
	const { title, author, publishedYear } = req.body;

	// check that title, author and publishedYear are given
	if (!title || !author || !publishedYear) {
		return res.status(400).json({
			error:
				"Title, Author and Published Year are required and can\'t be empty!",
		});
	}

	// generate new ID
	const newID = data.length > 0 ? data.length : 1;

	// create new book and show the new book
	const newBook = {
		id: newID,
		title: title.trim(),
		author: author.trim(),
		publishedYear,
	};
	data.push(newBook);
	res.status(201).json(newBook);
});

app.listen(port, () =>
	console.log(`book-api is running and listening on port ${port}!`),
);
