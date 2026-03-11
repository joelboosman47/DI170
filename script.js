const previewPopup = document.getElementById("previewPopup");
const projectLinks = document.querySelectorAll(".mini-project-link");

projectLinks.forEach((link) => {
	link.addEventListener("mouseenter", (e) => {
		const href = link.getAttribute("href");

		// Position the preview popup near the mouse
		previewPopup.style.left = e.pageX + 20 + "px";
		previewPopup.style.top = e.pageY - 150 + "px";

		// Clear previous iframe and add new one
		previewPopup.innerHTML = "";
		const iframe = document.createElement("iframe");
		iframe.src = href;
		iframe.onload = () => {
			// Iframe loaded successfully
		};
		iframe.onerror = () => {
			previewPopup.innerHTML =
				'<div class="preview-loading">Preview not available for this page</div>';
		};
		previewPopup.appendChild(iframe);

		previewPopup.classList.add("active");
	});

	link.addEventListener("mouseleave", () => {
		previewPopup.classList.remove("active");
	});
});

// Hide preview when mouse leaves preview popup
previewPopup.addEventListener("mouseleave", () => {
	previewPopup.classList.remove("active");
});
