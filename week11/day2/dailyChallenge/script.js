// Daily challenge : HTML Form

// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.

// Get all the relevant elements of the html file
const body = document.getElementsByTagName("body")[0];
const nameField = document.getElementById("name");
const lastnameField = document.getElementById("lastname");
const btn = document.getElementById("btn");

// configure what happens when the button is clicked
btn.addEventListener("click", (e) => {
	//we don't want the regular submit behaviour
	e.preventDefault();

	// create a JS object with the values of the form
	const formData = {
		name: nameField.value,
		lastname: lastnameField.value,
	};

	// transform it into a JSON string
	const jsonFormData = JSON.stringify(formData);

	// create a <p> element and add it to the body below the form to display the JSON.
	const newP = document.createElement("p");
	newP.innerText = jsonFormData;
	body.appendChild(newP);
});
