// 🌟 Exercise 4: Control Flow with if...else
// What You Will Learn:

// How to use if...else statements to control program flow.
// How to handle different conditions using if...else statements.
// Instructions
// Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.
// Use if...else statements to control the flow of a program.

function ex4(num: number): string {
	if (num > 0) return "positive";
	else if (num < 0) return "negative";
	else return "zero";
}

// to test --> 
console.log(ex4(-2), ex4(0), ex4(2));
// this returns --> negative zero positive
