import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Student from "./Student";

function App() {
	return (
		<>
			<Header />
			<Card />
			<Student name="Spongebob" age={15} isStudent={true} />
			<Student name="Patrick" age={42} isStudent={false} />
			<Student name="Je Moeder" age={42} isStudent={false} />
			<Student name="Je younger bijwijf" age={28} isStudent={true} />
			<Student name="Je geile zusje" />
			{/* <Food />
			<Food />
			<Food /> */}
			<Footer />
		</>
	);
}

export default App;
