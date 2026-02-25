// 1. Create two functions. Each function should return a promise.
// 2. The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// 3. The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

const makeAllCaps = function (arr) {
	const allStrings = arr.every((word) => typeof word === "string");

	return new Promise((resolve, reject) => {
		if (allStrings) {
			resolve(arr.map((word) => word.toUpperCase()));
		} else reject("All elements in the array should be strings.");
	});
};

const sortWords = function (arr) {
	return new Promise((resolve, reject) => {
		if (arr.length > 4) {
			resolve(arr.sort());
		} else reject("There should be more than 4 elements in the array.");
	});
};

//1. in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
	.then((arr) => sortWords(arr))
	.then((result) => console.log(result))
	.catch((error) => console.log(error));

//2. in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
	.then((arr) => sortWords(arr))
	.then((result) => console.log(result))
	.catch((error) => console.log(error));

//3. in this example, you should see in the console,
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
	.then((arr) => sortWords(arr))
	.then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
	.catch((error) => console.log(error));
