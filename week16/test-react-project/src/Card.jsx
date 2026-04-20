import cheekyme from "./assets/cheekyme.gif";

function Card() {
	return (
		<div className="card">
			<img className="card-image" src={cheekyme} alt="profile picture" />
			<h2 className="card-title">Joël Boosman</h2>
			<p className="card-text">
				I am a Software Engineer 👨🏼‍💻 and study Torah like a pro! 😎
			</p>
		</div>
	);
}

export default Card;
