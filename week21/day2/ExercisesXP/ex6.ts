// 🌟 Exercise 6: Object Type Annotations
// What You Will Learn:

// How to define the structure of an object using TypeScript’s type annotations.
// How to create and return an object with specific properties.

// Instructions
// Define the Object Structure:
// Create an object type annotation that defines the shape of a Person object. The object should have two properties: name (a string) and age (a number).
let Person: { name: string; age: number };
interface Person {
	name: string;
	age: number;
}

// Create the Function:
// Write a function named createPerson that takes two parameters: name (string) and age (number).
// The function should return an object that matches the Person structure.
function createPerson(name: string, age: number): Person {
	return { name, age };
}

// Test the Function:
// Test the createPerson function by creating a person and logging the result to the console.
console.log(
	"Person 1: ",
	createPerson("Joel", 34),
	"Person 2: ",
	createPerson("Elvira", 32),
);
