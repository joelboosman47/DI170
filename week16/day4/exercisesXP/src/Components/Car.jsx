import { useState } from "react";
import Garage from "./Garage";

function Car({ model }) {
	const [color, setColor] = useState("red");

	return (
		<>
			<header>
				This car is a {color} {model}
			</header>
			<Garage size="small" />
		</>
	);
}
export default Car;
