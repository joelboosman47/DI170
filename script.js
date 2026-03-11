const previewPopup = document.getElementById("previewPopup");
const projectLinks = document.querySelectorAll(".mini-project-link");
const projectCards = document.querySelectorAll(".mini-project");

function isMobile() {
	return window.innerWidth <= 768 || window.matchMedia("(hover: none)").matches;
}

function showPreview(href, x, y) {
	if (!isMobile()) {
		previewPopup.style.left = x + 20 + "px";
		previewPopup.style.top = y - 150 + "px";
	} else {
		previewPopup.style.left = "";
		previewPopup.style.top = "";
	}

	previewPopup.innerHTML = "";
	const iframe = document.createElement("iframe");
	iframe.src = href;
	iframe.onload = () => {};
	iframe.onerror = () => {
		previewPopup.innerHTML =
			'<div class="preview-loading">Preview not available for this page</div>';
	};
	previewPopup.appendChild(iframe);

	previewPopup.classList.add("active");
}

let pressTimer;
let isLongPress = false;

projectCards.forEach((card) => {
	const link = card.querySelector(".mini-project-link");
	if (!link) return;

	// Prevent context menu on mobile
	card.addEventListener("contextmenu", (e) => {
		if (isMobile()) {
			e.preventDefault();
		}
	});

	card.addEventListener("touchstart", (e) => {
		if (!isMobile()) return;
		isLongPress = false;

		pressTimer = setTimeout(() => {
			isLongPress = true;
			showPreview(link.getAttribute("href"), 0, 0);
		}, 500);
	}, { passive: true });

	card.addEventListener("touchend", (e) => {
		if (!isMobile()) return;
		clearTimeout(pressTimer);

		if (isLongPress) {
			if (e.cancelable) {
				e.preventDefault();
			}
		}
	});

	card.addEventListener("touchmove", () => {
		if (!isMobile()) return;
		clearTimeout(pressTimer);
	}, { passive: true });
});

projectLinks.forEach((link) => {
	link.addEventListener("mouseenter", (e) => {
		if (isMobile()) return;
		showPreview(link.getAttribute("href"), e.pageX, e.pageY);
	});

	link.addEventListener("mouseleave", () => {
		if (isMobile()) return;
		previewPopup.classList.remove("active");
	});
});

// Desktop: hide preview when mouse leaves preview popup
previewPopup.addEventListener("mouseleave", () => {
	if (isMobile()) return;
	previewPopup.classList.remove("active");
});

// Mobile: close preview on any click if it's active
document.addEventListener("click", (e) => {
	if (isMobile() && previewPopup.classList.contains("active")) {
		previewPopup.classList.remove("active");
	}
});
