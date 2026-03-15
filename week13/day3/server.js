import express from "express";

const app = express();
const port = 3000;

const users = [
	{ id: 1, name: "Joel", email: "joel_boosman@hotmail.com" },
	{ id: 2, name: "Evira", email: "elvirasevilla93@gmail.com" },
	{ id: 3, name: "Avigail", email: "To young to have an email!" },
];

app.get("/usr", (req, res) => {
	console.log(req);
	res.status(201).json(users);
});

app.get("/usr/:id", (req, res) => {
	const { id } = req.params;
	const user = users.find((item) => item.id == id);
	if (!user) {
		res.sendStatus(404);
		return;
	}
	res.json(user);
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
