import "./App.css";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Color from "./Components/Color";

const BuggyCounter = () => {
	const [counter, setCounter] = useState(0);
	const handleClick = () => {
		setCounter(counter + 1);
	};
	if (counter === 5) throw new Error("I crashed!");

	return <button onClick={handleClick}>{counter}</button>;
};

function App() {
	return (
		<>
			<section id="center">
				<ErrorBoundary
					fallbackRender={({ error, errorInfo }) => (
						<details style={{ whiteSpace: "pre-wrap" }}>
							{error && error.toString()}
							<br />
							{errorInfo}
						</details>
					)}
				>
					<BuggyCounter />
				</ErrorBoundary>
				<Color />
			</section>
		</>
	);
}

export default App;
