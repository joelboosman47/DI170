import { persons } from "./data.js";

const calcAverageAge = (arr) => {
	const sum = arr.reduce((acc, curr) => {
		return acc + curr.age;
	}, 0);

	const avr = Math.round(sum / arr.length);

	console.log(`The average age of the persons in the array is: ${avr}`);
};

calcAverageAge(persons);
