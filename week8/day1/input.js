// // Create a structured HTML file, and add the code below in the body.

// // In a JS file, write a JavaScript function to get the values of First and Last name of the following form:

// <form id="form1" onsubmit="getvalue()">
//         <label>First name: </label><input type="text" name="fname" value="David"><br>
//         <label>Last name: </label><input type="text" name="lname" value="BenGurion"><br>
//         <input type="submit" value="Submit">
//     </form>

function getvalue(event) {
	//event.preventDefault(); // Prevent form submission
	const fname = event.target.elements["fname"].value;
	const lname = event.target.elements["lname"].value;
	alert(`First name is: ${fname}.\nLast name is: ${lname}`);
	document.getElementById("knopje").value =
		"hahaha je kon het niet laten he? hahaha flieker";
}

getvalue();
