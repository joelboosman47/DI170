const addBtn = document.getElementById("add-btn");
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Save the list in the local storage of browser when changing the existing items
listContainer.addEventListener("input", function (e) {
	if (e.target.classList.contains("task-text")) {
		saveData();
	}
});

// Add new item when button is clicked
addBtn.addEventListener("click", addNewItem);
// Add new item when Enter is pressed in input
inputBox.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		e.preventDefault();
		addNewItem();
	}
});

// Function to add a new todo item to the list
function addNewItem() {
	let inputValue = inputBox.value;
	inputBox.value = null; // Clear typed text

	// Only add the new item if some text is entered
	if (inputValue.trim() !== "") {
		let newLi = document.createElement("li");
		newLi.classList.add("todo-item");

		let newDiv = document.createElement("div");
		newDiv.classList.add("item-left");

		// Create checkbox for marking as completed
		let newCheckbox = document.createElement("input");
		newCheckbox.type = "checkbox";
		newCheckbox.classList.add("checkbox");

		// Create editable span for the task text
		let newSpan = document.createElement("span");
		newSpan.classList.add("task-text");
		newSpan.contentEditable = "true";
		newSpan.innerText = inputValue;

		// connect the created elements
		newDiv.appendChild(newCheckbox);
		newDiv.appendChild(newSpan);
		newLi.appendChild(newDiv);

		// Create delete button for removing the item
		let newBtn = document.createElement("button");
		newBtn.classList.add("delete-btn");
		newBtn.innerText = "🗑️";
		newLi.appendChild(newBtn);

		// Add the new item to the list
		listContainer.appendChild(newLi);

		// Save the list in the local storage of browser
		saveData();
	}
}

// Add event handler for the whole listContainer so checkbox and button still work after restoring data
listContainer.addEventListener("click", function (e) {
	// 1. Logic for the Checkbox
	if (e.target.classList.contains("checkbox")) {
		let taskText = e.target.nextElementSibling;
		if (e.target.checked) {
			taskText.classList.add("completed");
			taskText.contentEditable = "false";
		} else {
			taskText.classList.remove("completed");
			taskText.contentEditable = "true";
		}
		saveData();
	}

	// 2. Logic for the delete button
	if (e.target.classList.contains("delete-btn")) {
		e.target.parentElement.remove();
		saveData();
	}
});

// Listen to Enter in list item (with delegation)
listContainer.addEventListener("keydown", function (e) {
	if (e.target.classList.contains("task-text") && e.key === "Enter") {
		e.preventDefault();
		e.target.blur();
	}
});

// Save and load list in local storage of browser
function saveData() {
	// We take the complete innerHTML of the list container and save it
	localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
	// Retrieve complete innerHTML and return to container
	listContainer.innerHTML = localStorage.getItem("data");

	// Restore the checkboxes
	const tasks = listContainer.querySelectorAll(".todo-item");
	tasks.forEach((task) => {
		const checkbox = task.querySelector(".checkbox");
		const text = task.querySelector(".task-text");
		if (text.classList.contains("completed")) {
			checkbox.checked = true;
		}
	});
}

// Call the function when opening the page
showTask();
