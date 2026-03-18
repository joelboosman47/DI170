import { getAllProducts } from "../models/products.js";

export const getProducts = (req, res) => {
	try {
		const result = getAllProducts();
		res.json(result.rows);
	} catch (error) {
		console.log(error);
	}
};
