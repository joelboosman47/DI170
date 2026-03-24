import express from "express";

const app = express();
const port = 3000;

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

// Pick a random emoji from the list and set if it should be the correct choice
const genRandomEmojiChoice = (emojis, correct) => {
	const randIndex = Math.floor(Math.random() * emojis.length);
	const randEmoji = { ...emojis[randIndex], correct };
	return randEmoji;
};

// Return randomly an array of 4 different emojis
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
	return emojiArr;
};

app.get("/emojis", (_, res) => {
	const emojisArr = presentEmojis(emojis);
	res.status(200).json(emojisArr);
});

app.listen(port, () =>
	console.log(`emojiGame server listening on port ${port}!`),
);
