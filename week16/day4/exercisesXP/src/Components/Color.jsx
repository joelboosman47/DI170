import { useEffect, useState } from "react";

function Color() {
	const [favoriteColor, setFavoriteColor] = useState("red");

	useEffect(() => {
		alert("useEffect reached");
	});

	return (
		<>
			<h1>
				My Favorite Color is <i>{favoriteColor}</i>
			</h1>
			<button
				onClick={() => {
					setFavoriteColor("blue");
				}}
			>
				Change favorite color
			</button>
		</>
	);
}

export default Color;
