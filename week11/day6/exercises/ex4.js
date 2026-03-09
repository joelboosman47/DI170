function resolveAfter2Seconds() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("resolved");
		}, 2000);
	});
}

async function asyncCall() {
	console.log("calling");
	let result = await resolveAfter2Seconds();
	console.log(result);
}

asyncCall();

// it will create a promise, and after 2 seconds log it's (resolved) result in the console, which is the text 'resolved'.
