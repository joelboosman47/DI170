// import { useState } from "react";

function MyButton({ count, clicked, handleClick }) {
	// const [count, setCount] = useState(0);
	// const [clicked, setClicked] = useState(false);

	// function handleClick() {
	// 	setCount(count + 1);
	// 	setClicked(!clicked);
	// }
	return (
		<button
			onClick={handleClick}
			className={clicked ? "welcome-message" : "login-prompt"}
		>
			Clicked {count} times
		</button>
	);
}

export default MyButton;
