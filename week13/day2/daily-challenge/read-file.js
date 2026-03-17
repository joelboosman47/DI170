import { promises as fs } from "fs";

export const readFileData = async () => {
	const fileData = await fs.readFile("./files/file-data.txt", "utf8");

	console.log(fileData);
};
