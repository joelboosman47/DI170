// 🌟 Exercise 6 : Change the navbar
// Instructions
// Create a new structured HTML file and a new Javascript file

// <div id="navBar">
//     <ul>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>

// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

// We are going to add a new <li> to the <ul>.
// Get the ul element
const ul = navDiv.querySelector("ul");

// First, create a new <li> tag (use the createElement method).
const newLi = document.createElement("li");

// Create a new text node with "Logout" as its specified text.
const logoutText = document.createTextNode("Logout");

// Append the text node to the newly created list node (<li>).
newLi.appendChild(logoutText);

// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
ul.appendChild(newLi);

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log("First link:", firstLi.textContent);
console.log("Last link:", lastLi.textContent);
