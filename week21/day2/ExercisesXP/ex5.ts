// 🌟 Exercise 5: Tuple Types
// What You Will Learn:

// How to use tuple types in TypeScript.
// How to define functions that return multiple values of different types.

// Instructions
// Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.
// The tuple should contain multiple values of different types
function getDetails(
	name: string,
	age: number,
): [name: String, age: number, message: string] {
	return [name, age, `Hello, ${name}! You are ${age} years old.`];
}

// to test:
// Call the function and log the tuple
const detailss = getDetails("Alice", 25);
// Expected output
console.log(detailss); // Output: ['Alice', 25, 'Hello, Alice! You are 25 years old.']
