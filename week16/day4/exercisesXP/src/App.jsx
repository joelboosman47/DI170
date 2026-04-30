import Car from "./Components/Car";
import Events from "./Components/Events";
import Phone from "./Components/Phone";
import Color from "./Components/Color";

const carinfo = { name: "Ford", model: "Mustang" };

function App() {
	return (
		<>
			<section id="center">
				<Car model={carinfo.model} />
				<Events />
				<Phone />
				<Color />
			</section>
		</>
	);
}

export default App;
