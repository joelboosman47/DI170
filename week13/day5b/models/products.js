import { db } from "../config/neondb.js";

export const getAllProducts = () => {
	return db("products").select("id", "price");
};
