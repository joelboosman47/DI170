const grid = document.getElementById("drawingGrid");
const randomBtn = document.getElementById("randomBtn");
const magicToggle = document.getElementById("magicToggle");
const colorBtns = document.querySelectorAll(".color-btn[data-color]");
const resetBtn = document.getElementById("resetBtn");

// Configuration
const ROWS = 30;
const COLS = 30;
let isMouseDown = false;
let currentColor = "#333333"; // Default paint color
let isMagicMode = false;
let randomMode = false;

// get available colors for randomBtn to choose from
const availableColors = [];
for (let colorBtn of colorBtns) {
	let color = colorBtn.getAttribute("data-color");
	availableColors.push(color);
}

// 1. Initialize Grid
function initGrid() {
	grid.innerHTML = "";
	// We use JS to create cells to keep HTML clean, but we use CSS Grid for layout
	for (let i = 0; i < ROWS * COLS; i++) {
		const cell = document.createElement("div");
		cell.classList.add("cell");
		// Prevent drag behavior interfering with painting
		cell.addEventListener("mousedown", (e) => {
			e.preventDefault();
			paint(cell);
		});
		cell.addEventListener("mouseenter", () => {
			if (isMouseDown) paint(cell);
		});
		grid.appendChild(cell);
	}
}

// 2. Painting Logic
function paint(cell) {
	if (randomMode) {
		// Random Mode: Random Color
		const randomIndex = Math.floor(Math.random() * availableColors.length);
		const randomColor = availableColors[randomIndex];
		cell.style.backgroundColor = randomColor;
	} else {
		// Standard Mode
		cell.style.backgroundColor = currentColor;
	}
}

// 3. Global Mouse Events
document.body.addEventListener("mousedown", () => (isMouseDown = true));
document.body.addEventListener("mouseup", () => (isMouseDown = false));

// 4. Color Palette Logic
colorBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		setActiveButton(btn);
		currentColor = btn.getAttribute("data-color");
		randomMode = false;
	});
});

// 5. Custom "random" Button Logic
randomBtn.addEventListener("click", () => {
	randomMode = true;
	setActiveButton(randomBtn);
});

// 6. Activate the reset button
resetBtn.addEventListener("click", () => {
	document.querySelectorAll(".cell").forEach((cell) => {
		cell.style.backgroundColor = "white";
	});
});

// 7. Magic Switch Logic
magicToggle.addEventListener("change", (e) => {
	isMagicMode = e.target.checked;
	// Magic Mode is set but not implemented yet
});

// Helper to handle visual "active" state
function setActiveButton(activeBtn) {
	document
		.querySelectorAll(".color-btn")
		.forEach((b) => b.classList.remove("active"));
	activeBtn.classList.add("active");
}

// Start
initGrid();
