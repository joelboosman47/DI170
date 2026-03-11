/* 
1. Create an array which value is the planets of the solar system.
2. For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
3. Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
4. Finally append each div to the <section> in the HTML (presented below).
5. Bonus: Do the same process to create the moons.
    - Be careful, each planet has a certain amount of moons. How should you display them?
    - Should you still use an array for the planets ? Or an array of objects ?
*/

let planets = [
	{ planetName: "Sun", nrOfMoons: 0 },
	{ planetName: "Earth", nrOfMoons: 1 },
	{ planetName: "Mercury", nrOfMoons: 0 },
	{ planetName: "Mars", nrOfMoons: 2 },
	{ planetName: "Saturn", nrOfMoons: 5 },
];

// Reference to the section where planet elements will be appended
let section = document.getElementsByClassName("listPlanets")[0];

// Create a planet element for each planet object
planets.forEach((planet, index) => {
	// Create the planet div and give it classes (base + index-specific color)
	let elem = document.createElement("div");
	elem.className = `planet planet-${index}`;
	elem.innerHTML = planet.planetName; // display the planet name

	// Small spacing styles so planets don't sit flush together
	elem.style.marginLeft = "5px";
	elem.style.marginBottom = "20px";

	// Add the planet to the page
	section.appendChild(elem);

	// Create and position each moon for this planet
	for (let i = 0; i < planet.nrOfMoons; i++) {
		// Create moon element and style with the 'moon' class
		let moon = document.createElement("div");
		moon.className = "moon";

		// Position moons around the planet in a circle so they are visible
		const angle = (360 / planet.nrOfMoons) * i; // angle in degrees
		const radius = 70; // distance from planet center in px
		const x = Math.cos((angle * Math.PI) / 180) * radius; // x offset
		const y = Math.sin((angle * Math.PI) / 180) * radius; // y offset

		// Planet element is 100x100, so add 50 to center moon coordinates
		moon.style.left = 50 + x + "px";
		moon.style.top = 50 + y + "px";

		// Append moon to its parent planet
		elem.appendChild(moon);
	}
});
