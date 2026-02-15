const grid = document.getElementById("drawingGrid");
const colorPicker = document.getElementById("colorPicker");
const wheelBtn = document.getElementById("wheelBtn");
const magicToggle = document.getElementById("magicToggle");
const colorBtns = document.querySelectorAll(".color-btn[data-color]");
const resetBtn = document.getElementById("resetBtn");

// Configuration
const ROWS = 30;
const COLS = 30;
let isMouseDown = false;
let currentColor = "#333333"; // Default paint color
let isMagicMode = false;

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
	if (isMagicMode) {
		// Magic Mode: Random Color
		const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
		cell.style.backgroundColor = randomColor;
		cell.style.borderColor = randomColor; // Optional: hide border
	} else {
		// Standard Mode
		cell.style.backgroundColor = currentColor;
		cell.style.borderColor = "#eee"; // Reset border if coming back from magic
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
	});
});

// 5. Custom "Wheel" Button Logic
wheelBtn.addEventListener("click", () => {
	colorPicker.click(); // Trigger the hidden input
});

colorPicker.addEventListener("input", (e) => {
	currentColor = e.target.value;
	// Visually select the wheel button
	setActiveButton(wheelBtn);
});

// Helper to handle visual "active" state
function setActiveButton(activeBtn) {
	document
		.querySelectorAll(".color-btn")
		.forEach((b) => b.classList.remove("active"));
	activeBtn.classList.add("active");
}

// 6. Magic Switch Logic
magicToggle.addEventListener("change", (e) => {
	isMagicMode = e.target.checked;
});

// 7. Activate the reset button
resetBtn.addEventListener("click", () => {
	document.querySelectorAll(".cell").forEach((cell) => {
		cell.style.backgroundColor = "white";
		cell.style.borderColor = "#eee";
	});
});

// Start
initGrid();
