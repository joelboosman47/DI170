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
	{ planetName: "Saturn", nrOfMoons: 274 },
];

let section = document.getElementsByClassName("listPlanets")[0];

planets.forEach((planet, index) => {
	let elem = document.createElement("div");
	elem.className = `planet planet-${index}`;
	elem.innerHTML = planet.planetName;
	elem.style.marginLeftgin = "5px";
	elem.style.marginBottom = "20px";
	section.appendChild(elem);
	for (let i = 0; i < planet.nrOfMoons; i++) {
		let moon = document.createElement("div");
		if (planet.planetName === "Saturn") {
			moon.className = "moon-saturn";
		} else moon.className = "moon";

		// Calculate position in a circle around the planet
		const angle = (360 / planet.nrOfMoons) * i;
		const radius = 70; // distance from planet center
		const x = Math.cos((angle * Math.PI) / 180) * radius;
		const y = Math.sin((angle * Math.PI) / 180) * radius;

		moon.style.left = 50 + x + "px";
		moon.style.top = 50 + y + "px";

		elem.appendChild(moon);
	}
});
