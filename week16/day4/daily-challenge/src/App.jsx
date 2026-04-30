import "./App.css";
import { useState } from "react";

function App() {
	const [languages, setLanguages] = useState([
		{ name: "Php", votes: 0 },
		{ name: "Python", votes: 0 },
		{ name: "JavaScript", votes: 0 },
		{ name: "Java", votes: 0 },
	]);

	return (
		<>
			<h1>Vote Your Language!</h1>
			<div className="languages">
				{languages.map((language) => {
					return (
						<div className="language">
							<div className="voteCount">{language.votes}</div>
							<div className="languageName">{language.name}</div>
							<button
								onClick={() => {
									setLanguages(
										languages.map((item) =>
											item.name === language.name
												? { ...item, votes: item.votes + 1 }
												: item,
										),
									);
								}}
							>
								Click Here
							</button>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default App;
