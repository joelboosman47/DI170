import Car from "./Components/Car";

const carinfo = { name: "Ford", model: "Mustang" };

function App() {
	return (
		<>
			<section id="center">
				<Car model={carinfo.model} />
			</section>
		</>
	);
}

export default App;
