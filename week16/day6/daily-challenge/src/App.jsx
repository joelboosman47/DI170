import "./App.css";
import { useState } from "react";
import Form from "./Form";
import EnteredInfo from "./EnteredInfo";

function App() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		age: "",
		gender: "",
		destination: "",
		nutsFree: false,
		lactoseFree: false,
		isVegan: false,
	});

	const handleChange = (event) => {
		const { name, value, type, checked } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	return (
		<>
			<h1>Sample Form</h1>
			<Form formData={formData} handleChange={handleChange} />
			<hr />
			<EnteredInfo formData={formData} />
		</>
	);
}

export default App;
