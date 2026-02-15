const canvas = document.getElementById("canvas");
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

// Helper to handle visual "active" state
function setActiveButton(activeBtn) {
	document
		.querySelectorAll(".color-btn")
		.forEach((b) => b.classList.remove("active"));
	activeBtn.classList.add("active");
}

// Start
initGrid();

// 7. Magic Switch Logic
magicToggle.addEventListener("change", (e) => {
	isMagicMode = e.target.checked;
});

// Magic sparkles logic
/* --- System Parameters (Recommended)--- */
let bNum = 3; // Num of bubbles created on movement (3)
let bSize = 8; // Bubble size (8)
let bSpeed = 6; // Bubble speed (6)
let bDep = 0.1; // Bubble depletion speed (0.1)
let bDist = 30; // Spark length (30)
let bStarVar = 2; // Num of star variation (2)
let bHue = 4; // Color change speed (4)

/* --- Main Program: DO NOT EDIT BELOW --- */
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let spots = [];
let hue = 0;

const mouse = {
	x: undefined,
	y: undefined,
};

document.addEventListener("mousemove", function (event) {
	mouse.x = event.x;
	mouse.y = event.y;

	if (isMagicMode) {
		for (let i = 0; i < bNum; i++) {
			spots.push(new Particle());
		}
	}
});

window.addEventListener("resize", function () {
	canvas.width = innerWidth;
	canvas.height = innerHeight;
});

class Particle {
	constructor() {
		this.x = mouse.x;
		this.y = mouse.y;
		this.size = Math.random() * bSize + 0.1;
		this.speedX = Math.random() * bSpeed - bSpeed / 2;
		this.speedY = Math.random() * bSpeed - bSpeed / 2;
		this.points = Math.floor(Math.random() * bStarVar) + 5; //
		this.radius = Math.random() * bSize + 0.1;
		this.color = "hsl(" + bHue * hue + ", 100%, 50%)";
		this.deg = 0;
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		star(this.x, this.y, this.radius * 2, this.radius, this.points);
		// ctx.roundRect(this.x, this.y, this.size, this.size, 2);
		ctx.rotate(this.deg);
		ctx.fill();
		// ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		// ctx.fill();
	}
	update() {
		this.x += this.speedX;
		this.y += this.speedY;
		if (this.size > bDep) this.size -= bDep;
	}
}

function handleParticle() {
	for (let i = 0; i < spots.length; i++) {
		spots[i].update();
		spots[i].draw();
		for (let j = i; j < spots.length; j++) {
			const dx = spots[i].x - spots[j].x;
			const dy = spots[i].y - spots[j].y;
			const distance = Math.sqrt(dx * dx + dy * dy);
			if (distance < bDist) {
				ctx.beginPath();
				ctx.strokeStyle = spots[i].color;
				ctx.lineWidth = spots[i].size / 3;
				ctx.moveTo(spots[i].x, spots[i].y);
				// ctx.lineTo(spots[j].x, spots[j].y);
				ctx.bezierCurveTo(
					spots[j].x,
					spots[j].y,
					spots[j].x,
					spots[i].y,
					spots[j].x,
					spots[j].y,
				);
				ctx.stroke();
			}
		}
		if (spots[i].size <= bDep) {
			spots.splice(i, 1);
			i--;
		}
	}
	hue++;
}

function star(x, y, radius1, radius2, npoints) {
	let angle = (2 * Math.PI) / npoints;
	let halfAngle = angle / 2.0;
	ctx.moveTo(
		x + Math.cos(halfAngle) * radius1,
		y + Math.sin(halfAngle) * radius1,
	);
	for (let a = 0; a <= 2 * Math.PI; a += angle) {
		let sx = x + Math.cos(a) * radius2;
		let sy = y + Math.sin(a) * radius2;
		ctx.lineTo(sx, sy);
		sx = x + Math.cos(a + halfAngle) * radius1;
		sy = y + Math.sin(a + halfAngle) * radius1;
		ctx.lineTo(sx, sy);
	}
}

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	handleParticle();
	// hue++;
	requestAnimationFrame(animate);
}

animate();
