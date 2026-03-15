const { readFile, writeFile } = require("./filemanager");

readFile("./helloWorld.txt");
writeFile("Writing to the file", "./byeWorld.txt");
