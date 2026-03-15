const products = require("./products.js");

const findProduct = (productName) => {
	const product = products.find((prod) => prod.name === productName);
	if (!product) {
		return "N/A";
	}
	return product;
};

console.log("Apple => ", findProduct("Apple"));
console.log("Book => ", findProduct("Book"));
console.log("Table => ", findProduct("Table"));
console.log("Phone => ", findProduct("Phone"));
