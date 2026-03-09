const chuck = async () => {
	try {
		const resp = await fetch(
			"https://api.chucknorris.io/jokes/random?category=religion",
		);
		const data = await resp.json();
		alert(data.value);
	} catch (error) {
		alert(error);
	}
};

chuck();
