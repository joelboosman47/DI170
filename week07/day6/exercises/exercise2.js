// 🌟 Exercise 2 : Shopping List
// Instructions
const stock = {
	banana: 6,
	apple: 0,
	pear: 12,
	orange: 32,
	blueberry: 1,
};

const prices = {
	banana: 4,
	apple: 2,
	pear: 1,
	orange: 1.5,
	blueberry: 10,
};
// 1 Add the stock and prices objects to your js file.

// 2 Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
let shoppingList = ["banana", "orange", "apple"];

// 3 Create a function called myBill() that takes no parameters.
function myBill() {
	// 4 The function should return the total price of your shoppingList. In order to do this you must follow these rules:
	let totalPrice = 0;
	// 1 The item must be in stock. (Hint : check out if .. in)
	for (let item of shoppingList) {
		if (stock[item] > 0) {
			totalPrice += prices[item];
			// 6 Bonus: If the item is in stock, decrease the item’s stock by 1
			stock[item]--;
		} // 2 If the item is in stock find out the price in the prices object.
	}
	return totalPrice;
}

// 5 Call the myBill() function.
myBill();
