// The point of this challenge is to display a list of two books on your browser.
// In the body of the HTML page, create an empty section:
// <section class="listBooks"></section>

// Create an array called allBooks with 2 book objects.
// Each object has 4 properties: title, author, image (url), alreadyRead (boolean)
const allBooks = [
	{
		title: "The Stone Edition Chumash",
		author: "rabbi Nosson Scherman",
		image: "book1.jpg",
		alreadyRead: true,
	},
	{
		title: "Fight Club",
		author: "Chuck Palahniuk",
		image: "book2.jpg",
		alreadyRead: false,
	},
];

// Render each book inside a div within the <section class="listBooks">
const section = document.querySelector(".listBooks");

allBooks.forEach((book) => {
	const bookDiv = document.createElement("div");

	// Create image with 100px width
	const img = document.createElement("img");
	img.src = book.image;
	img.style.width = "100px";

	// Display book title and author (e.g., "HarryPotter written by JKRolling")
	const bookDetails = document.createElement("p");
	bookDetails.textContent = `${book.title} written by ${book.author}`;

	// If the book is already read, set the text color to red
	if (book.alreadyRead) {
		bookDetails.style.color = "red";
	}

	bookDiv.appendChild(img);
	bookDiv.appendChild(bookDetails);
	section.appendChild(bookDiv);
});
