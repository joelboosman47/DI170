// 🌟 Exercise 4 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
function hotelCost(nrOfNights) {
	// The hotel costs $140 per night. The function should return the total price of the hotel.
	return nrOfNights * 140;
}
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// --Following the bonus, this is not necessary anymore.

// Define a function called planeRideCost().
function planeRideCost(destination) {
	// It should ask the user for their destination.
	// The function should return a different price depending on the location.
	// “London”: 183$
	// “Paris” : 220$
	// All other destination : 300$
	switch (destination) {
		case "London":
			return 183;
		case "Paris":
			return 220;
		default:
			return 300;
	}
}
// If the user doesn’t answer or if the answer is not a string, ask again.
// --Following the bonus, this is not necessary anymore.

// Define a function called rentalCarCost().
function rentalCarCost(nrOfDays) {
	// It should ask the user for the number of days they would like to rent the car.
	// Calculate the cost to rent the car. The car costs $40 everyday.
	// If the user rents a car for more than 10 days, they get a 5% discount.
	// The function should return the total price of the car rental.
	if (nrOfDays <= 10) {
		return nrOfDays * 40;
	} else return nrOfDays * 40 * 0.95;
}
// If the user doesn’t answer or if the answer is not a number, ask again.
// --Following the bonus, this is not necessary anymore.

function isNumber(value) {
	return !isNaN(value);
}
// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
function totalVacationCost() {
	let userInput;
	// keep asking for input if the user doesn't enter anything or he enters only blank spaces.
	do {
		// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
		userInput = window.prompt(
			"Please enter the number of nights in the hotel, the destination and the number of days you need to rent a car (comma-separated)",
		);
	} while (userInput === null || userInput.trim() === "");
	userInput = userInput.split(","); // convert the input into an array, split based on the commas.

	// Check that the input is actually correct
	if (
		userInput.length === 3 &&
		isNumber(userInput[0]) &&
		isNumber(userInput[2])
	) {
		let hotel = hotelCost(parseFloat(userInput[0]));
		let plane = planeRideCost(userInput[1]);
		let car = rentalCarCost(parseFloat(userInput[2]));
		let totalCost = hotel + plane + car;

		window.alert(
			`Your hotel costs: $${hotel}, your plane ticket costs: $${plane} and your car costs: $${car}.\nThe total cost for your vacation are: $${totalCost}.`,
		);
		return totalCost;
	} else {
		window.alert("Your input wasn't correct. Cannot calculate vacation costs.");
		return null;
	}
}
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()
totalVacationCost();
