const form = document.getElementById("emoji-form");
const emojiDisplay = document.getElementById("emoji-display");
const optionsContainer = document.getElementById("options-container");
const messageDOM = document.getElementById("message");
const score = document.getElementById("score");
const submitBtn = document.getElementById("submit-btn");
const nextBtn = document.getElementById("next-btn");

const leaderboardList = document.getElementById("leaderboard-list");
const scoreForm = document.getElementById("score-form");
const submissionContainer = document.getElementById("submission-container");
const finalScoreSpan = document.getElementById("final-score");
const usernameInput = document.getElementById("username");

let currScore = 0;
let currentTargetEmoji = "";

// --- GAME LOGIC ---

const renderEmojis = (data) => {
	const { targetEmoji, options } = data;
	currentTargetEmoji = targetEmoji;
	emojiDisplay.innerText = targetEmoji;

	optionsContainer.innerHTML = ""; 
	options.forEach((optionName) => {
		optionsContainer.innerHTML += `
		<label class="option-label">
			<input type="radio" name="emoji-guess" value="${optionName}" required> 
			${optionName}
		</label>`;
	});
};

const fetchEmojis = async () => {
	try {
		const response = await fetch("emojis");
		if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
		const data = await response.json();
		renderEmojis(data);
	} catch (error) {
		console.error("Fetch error:", error.message);
	}
};

const sendGuess = async (guessName) => {
	try {
		const response = await fetch("guess", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ targetEmoji: currentTargetEmoji, guess: guessName }),
		});
		return await response.json();
	} catch (error) {
		console.error("Fetch error:", error.message);
	}
};

const processResult = (result) => {
	const { message, isCorrect, correctName } = result;
	const allInputs = optionsContainer.querySelectorAll('input[name="emoji-guess"]');

	allInputs.forEach((input) => {
		const parentLabel = input.parentElement;
		
		if (input.value === correctName) {
			parentLabel.classList.add("correct");
		}
		if (input.checked && !isCorrect) {
			parentLabel.classList.add("incorrect");
		}
		input.disabled = true;
	});

	messageDOM.innerText = message;
	messageDOM.className = isCorrect ? "correct-text" : "incorrect-text";

	if (isCorrect) {
		currScore++;
		score.innerText = currScore;
		nextBtn.style.display = "inline";
	} else {
		// Game Over - Show submission
		submissionContainer.style.display = "block";
		finalScoreSpan.innerText = currScore;
	}
};

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	submitBtn.style.display = "none";
	
	const data = new FormData(form);
	const guess = data.get("emoji-guess");

	const result = await sendGuess(guess);
	processResult(result);
});

nextBtn.addEventListener("click", (e) => {
	e.preventDefault();
	messageDOM.innerText = "";
	messageDOM.className = "";
	e.target.style.display = "none";
	submitBtn.style.display = "inline";
	fetchEmojis();
});


// --- LEADERBOARD LOGIC ---

const fetchLeaderboard = async () => {
	try {
		const response = await fetch("leaderboard");
		const data = await response.json();
		renderLeaderboard(data);
	} catch (error) {
		console.error("Leaderboard fetch error:", error.message);
	}
};

const renderLeaderboard = (lbData) => {
	leaderboardList.innerHTML = "";
	if (lbData.length === 0) {
		leaderboardList.innerHTML = "<li class='empty-leaderboard'>No scores yet! Be the first!</li>";
		return;
	}
	
	lbData.forEach((entry, index) => {
		leaderboardList.innerHTML += `
			<li>
				<div>
					<span class="lb-rank">${index + 1}</span>
					<span class="lb-name">${entry.username}</span>
				</div>
				<span class="lb-score">${entry.score}</span>
			</li>
		`;
	});
};

scoreForm.addEventListener("submit", async (e) => {
	e.preventDefault();
	const username = usernameInput.value;
	
	try {
		const response = await fetch("score", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username, score: currScore })
		});
		const result = await response.json();
		
		if (result.success) {
			renderLeaderboard(result.leaderboard);
			
			// Reset game
			currScore = 0;
			score.innerText = currScore;
			submissionContainer.style.display = "none";
			usernameInput.value = "";
			messageDOM.innerText = "";
			messageDOM.className = "";
			
			submitBtn.style.display = "inline";
			fetchEmojis();
		}
	} catch (error) {
		console.error("Score submission error:", error.message);
	}
});

// Initialize game
fetchEmojis();
fetchLeaderboard();
