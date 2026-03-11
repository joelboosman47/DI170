// Exercise 3 : What’s in my wallet ?
// Instructions

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01
const quarter = 0.25;
const dime = 0.1;
const nickel = 0.05;
const penny = 0.01;

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.
function changeEnough(itemPrice, amountOfChange) {
	let sum =
		amountOfChange[0] * quarter +
		amountOfChange[1] * dime +
		amountOfChange[2] * nickel +
		amountOfChange[3] * penny;

	// In the function, determine whether or not you can afford the item.
	if (sum >= itemPrice) {
		return true; // If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
	} else return false; // If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false
}

// Illustration:
// After you created the function, invoke it like this:
let test = changeEnough(4.25, [25, 20, 5, 0]);
console.log(test);
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// Examples
// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true
