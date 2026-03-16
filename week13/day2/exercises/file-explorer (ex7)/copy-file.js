import { promises as fs } from "fs";

// read the file content
const fileContent = await fs.readFile("./source.txt", "utf8");

// write the content to a new file
await fs.writeFile("./destination.txt", fileContent, "utf8");
