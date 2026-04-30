import { useState } from "react";

const clickMe = () => {
	alert("I was clicked!");
};

const handleKeyDown = (e) => {
	if (e.key === "Enter") {
		e.preventDefault();
		alert(`The Enter key was pressed, your input is: ${e.target.value}`);
	}
};

function Events() {
	const [isToggleOn, setIsToggleOn] = useState(true);
	return (
		<>
			<button onClick={clickMe}>Click Me!</button>
			<br />
			<input
				type="text"
				placeholder="Press the ENTER key!"
				onKeyDown={handleKeyDown}
			/>
			<br />
			<div style={{ border: "1px, solid" }}>
				<p>Excercise 9:</p>
				<button onClick={() => setIsToggleOn(!isToggleOn)}>
					{isToggleOn ? "ON" : "OFF"}
				</button>
			</div>
		</>
	);
}

export default Events;
