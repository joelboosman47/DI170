const fs = require("fs").promises;

async function readFile(filePath) {
	try {
		const data = await fs.readFile(filePath, "utf8");
		console.log("File content:", data);
	} catch (err) {
		console.error("Error reading file:", err);
	}
}

async function writeFile(content, filePath) {
	try {
		await fs.writeFile(filePath, content, "utf8");

		console.log("Files created successfully");
	} catch (err) {
		console.error("Error writing files:", err);
	}
}

module.exports = { readFile, writeFile };
