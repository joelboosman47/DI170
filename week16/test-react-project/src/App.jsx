import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import MyButton from "./MyButton";

import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);
	const [clicked, setClicked] = useState(false);

	function handleClick() {
		setCount(count + 1);
		setClicked(!clicked);
	}
	return (
		<>
			{/* <Header />
			<Card />
			<Student name="Spongebob" age={15} isStudent={true} />
			<Student name="Patrick" age={42} isStudent={false} />
			<Student name="Je Moeder" age={42} isStudent={false} />
			<Student name="Je jonge scharrel moeder" age={28} isStudent={true} />
			<Student name="Je geile zusje" />
			<Food />
			<Food />
			<Food />
			<Footer /> */}

			<UserGreeting isLoggedIn={true} username="Joelboosman" />
			<UserGreeting isLoggedIn={true} />
			<MyButton count={count} clicked={clicked} handleClick={handleClick} />
			<MyButton count={count} clicked={clicked} handleClick={handleClick} />
		</>
	);
}

export default App;
