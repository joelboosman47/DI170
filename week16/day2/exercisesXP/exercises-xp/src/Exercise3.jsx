import myImage from "./assets/react.svg";
import "./Exercise.css";

const style_header = {
	color: "white",
	backgroundColor: "DodgerBlue",
	padding: "10px",
	fontFamily: "Arial",
};

function Exercise() {
	return (
		<>
			<h1 style={style_header}>This is a Header</h1>
			<p className="para">This is a Paragraph</p>
			<a href="/">This is a Link</a>
			<form action="submit">
				<h2>This is a Form:</h2>
				<label>Enter your name:</label>
				<br />
				<input type="text" />
				<input type="submit" value="Submit" />
			</form>
			<h3>Here is an Image:</h3>
			<img src={myImage} alt="React" />
			<h4>This is a List:</h4>
			<ul>
				<li>Coffee</li>
				<li>Tea</li>
				<li>Milk</li>
			</ul>
		</>
	);
}

export default Exercise;
