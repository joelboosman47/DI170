// 🌟 Exercise 5 : Users
// Instructions
// Create a new structured HTML file and a new Javascript file

/* <div id="container">Users:</div>
<ul class="list">
    <li>John</li>
    <li>Pete</li>
</ul>
<ul class="list">
    <li>David</li>
    <li>Sarah</li>
    <li>Dan</li>
</ul> */

// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
console.log(document.getElementById("container").outerHTML);
// Change the name “Pete” to “Richard”.
document.getElementsByTagName("li")[1].textContent = "Richard";
// Delete the second <li> of the second <ul>.
document
	.getElementsByClassName("list")[1]
	.getElementsByTagName("li")[1]
	.remove();
// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
for (let elem of document.getElementsByTagName("ul")) {
	elem.children[0].innerHTML = "Joël";
}

// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
document
	.querySelectorAll("ul")
	.forEach((ul) => ul.classList.add("student_list"));

// Add the classes university and attendance to the first <ul>.
document
	.getElementsByTagName("ul")[0]
	.classList.add("university", "attendance");

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
let divElement = document.getElementsByTagName("div")[0];
divElement.style.background = "lightblue";
divElement.style.padding = "10px";

// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
for (let element of document.getElementsByTagName("li")) {
	if (element.innerHTML === "Dan") {
		element.hidden = true;
	}
}

// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
for (let element of document.getElementsByTagName("li")) {
	if (element.innerHTML === "Richard") {
		element.style.border = "solid";
	}
}

// Change the font size of the whole body.
document.body.style.fontSize = "20px";

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
if (divElement.style.background === "lightblue") {
	let names = [];
	for (let li of document.getElementsByTagName("li")) {
		if (names.includes(li.innerHTML) || li.hidden) {
			continue;
		} else names.push(li.innerHTML);
	}
	alert(`Hello ${names.join(" and ")}!`);
}
