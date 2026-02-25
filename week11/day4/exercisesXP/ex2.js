// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

const fourSec = new Promise((resolve) => {
	setTimeout(resolve, 4000, "success");
});

fourSec.then((result) => console.log(result));
