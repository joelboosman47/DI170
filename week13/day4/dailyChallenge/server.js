import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Middleware configuration
app.use(express.json()); // Parser for JSON objects in POST requests
app.use(express.static("public")); // Serve static frontend files (HTML/CSS/JS)

const emojis = [
	{ emoji: "😀", name: "Smile" },
	{ emoji: "🐶", name: "Dog" },
	{ emoji: "🌮", name: "Taco" },
	{ emoji: "😂", name: "Laughing" },
	{ emoji: "❤️", name: "Heart" },
	{ emoji: "😍", name: "Heart Eyes" },
	{ emoji: "🎉", name: "Party" },
	{ emoji: "🔥", name: "Fire" },
	{ emoji: "💯", name: "Hundred Points" },
	{ emoji: "⭐", name: "Star" },
	{ emoji: "🎈", name: "Balloon" },
	{ emoji: "🎁", name: "Gift" },
	{ emoji: "🚀", name: "Rocket" },
	{ emoji: "👍", name: "Thumbs Up" },
	{ emoji: "👏", name: "Clapping" },
	{ emoji: "🙏", name: "Pray" },
	{ emoji: "😎", name: "Sunglasses" },
	{ emoji: "🤔", name: "Thinking" },
	{ emoji: "😴", name: "Sleeping" },
	{ emoji: "😡", name: "Angry" },
	{ emoji: "😱", name: "Shocked" },
	{ emoji: "🤣", name: "Rolling Laughing" },
	{ emoji: "😘", name: "Kiss" },
	{ emoji: "🥰", name: "Love Heart Eyes" },
	{ emoji: "😊", name: "Smiling" },
	{ emoji: "🐱", name: "Cat" },
	{ emoji: "🐭", name: "Mouse" },
	{ emoji: "🐹", name: "Hamster" },
	{ emoji: "🐰", name: "Bunny" },
	{ emoji: "🦊", name: "Fox" },
	{ emoji: "🐻", name: "Bear" },
	{ emoji: "🐼", name: "Panda" },
	{ emoji: "🐨", name: "Koala" },
	{ emoji: "🐯", name: "Tiger" },
	{ emoji: "🐮", name: "Cow" },
	{ emoji: "🍕", name: "Pizza" },
	{ emoji: "🍔", name: "Burger" },
	{ emoji: "🍟", name: "Fries" },
	{ emoji: "🌭", name: "Hot Dog" },
	{ emoji: "🍗", name: "Chicken" },
	{ emoji: "🍓", name: "Strawberry" },
	{ emoji: "🍎", name: "Apple" },
	{ emoji: "🍌", name: "Banana" },
	{ emoji: "⚽", name: "Soccer Ball" },
	{ emoji: "🏀", name: "Basketball" },
	{ emoji: "🎮", name: "Game Controller" },
	{ emoji: "🎸", name: "Guitar" },
	{ emoji: "🌟", name: "Glowing Star" },
	{ emoji: "💪", name: "Muscle" },
	{ emoji: "🦥", name: "Sloth" },
];

let leaderboard = [];

// Pick a random emoji from the list and set if it should be the correct choice
const genRandomEmojiChoice = (emojis, correct) => {
	const randIndex = Math.floor(Math.random() * emojis.length);
	const randEmoji = { ...emojis[randIndex], correct };
	return randEmoji;
};

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

// Return the target emoji and a randomized array of 4 different options
const presentEmojis = (emojis) => {
	const emojiArr = [];
	const correctChoice = genRandomEmojiChoice(emojis, true); // pick the correct emoji
	emojiArr.push(correctChoice);

	// pick 3 additional wrong choices
	let index = 0;
	while (index < 3) {
		const wrongChoice = genRandomEmojiChoice(emojis, false);
		// avoid duplicate emojis
		if (!emojiArr.some((item) => item.emoji === wrongChoice.emoji)) {
			emojiArr.push(wrongChoice);
			index++;
		}
	}

	const options = emojiArr.map((e) => e.name);
	return {
		targetEmoji: correctChoice.emoji,
		options: shuffleArray(options),
	};
};

app.get("/emojis", (_, res) => {
	const emojisArr = presentEmojis(emojis);
	res.status(200).json(emojisArr);
});

app.post("/guess", (req, res) => {
	const { targetEmoji, guess } = req.body;
	const actualEmoji = emojis.find((e) => e.emoji === targetEmoji);

	if (actualEmoji && actualEmoji.name === guess) {
		res.status(200).json({
			message: "Correct!",
			isCorrect: true,
			correctName: actualEmoji.name,
		});
	} else {
		res.status(200).json({
			message: `Wrong! The correct answer was ${actualEmoji ? actualEmoji.name : "Unknown"}`,
			isCorrect: false,
			correctName: actualEmoji ? actualEmoji.name : null,
		});
	}
});

app.get("/leaderboard", (_, res) => {
	res.status(200).json(leaderboard);
});

app.post("/score", (req, res) => {
	const { username, score } = req.body;
	if (username && typeof score === "number") {
		leaderboard.push({ username, score });
		leaderboard.sort((a, b) => b.score - a.score);
		leaderboard = leaderboard.slice(0, 5); // Keep top 5
	}
	res.status(200).json({ success: true, leaderboard });
});

app.listen(port, () =>
	console.log(`emojiGame server listening on port ${port}!`),
);
