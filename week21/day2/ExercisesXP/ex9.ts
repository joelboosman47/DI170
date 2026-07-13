/* 🌟 Exercise 9: Function Overloading with Default Parameters
What You Will Learn:

How to use function overloading in TypeScript.
How to create overloaded functions with default parameters.
Instructions
Create an overloaded function greet that can either take a name and greet the person, or take no arguments and return a default greeting.
*/

function greet(name: string): string;
function greet(): string;
function greet(name?: string): string {
	return name ? `Hello ${name}, how are you doing?` : "Hello there!";
}

// testing
console.log(greet("General Kenobi!"));
console.log(greet());
