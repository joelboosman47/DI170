const addBtn = document.getElementById("add-btn");
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

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
	inputBox.value = null;

	let newLi = document.createElement("li");
	newLi.classList.add("todo-item");

	let newDiv = document.createElement("div");
	newDiv.classList.add("item-left");

	// Create checkbox for marking as completed
	let newCheckbox = document.createElement("input");
	newCheckbox.type = "checkbox";
	newCheckbox.classList.add("checkbox");
	newCheckbox.addEventListener("change", checkBox);

	// Create editable span for the task text
	let newSpan = document.createElement("span");
	newSpan.classList.add("task-text");
	newSpan.contentEditable = "true";
	newSpan.innerText = inputValue;
	newSpan.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			e.preventDefault(); // Prevents a new line
			e.target.blur(); // Removes focus (stops editing)
		}
	});

    // connect the created elements
	newDiv.appendChild(newCheckbox);
	newDiv.appendChild(newSpan);
	newLi.appendChild(newDiv);

	// Create delete button for removing the item
	let newBtn = document.createElement("button");
	newBtn.classList.add("delete-btn");
	newBtn.innerText = "🗑️";
	newBtn.addEventListener("click", (e) => {
		e.target.parentElement.remove();
	});
	newLi.appendChild(newBtn);

	// Add the new item to the list
	listContainer.appendChild(newLi);
}

// Function to handle checkbox toggle (complete/incomplete)
function checkBox(elem) {
	let taskText = elem.target.nextElementSibling;
	if (elem.target.checked) {
		taskText.classList.add("completed");
		taskText.contentEditable = "false";
	} else {
		taskText.classList.remove("completed");
		taskText.contentEditable = "true";
	}
}
