import { promises as fs } from "fs";

const dirPath = "./";

try {
	const files = await fs.readdir(dirPath);
	console.log("Directory contents:", files); // files is an array of strings
} catch (err) {
	console.error("Error reading directory:", err);
}
