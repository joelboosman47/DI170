function UserFavoriteAnimals(props) {
	const favAnimals = props.favAnimals;

	return (
		<>
			<ul>
				{favAnimals.map((animal, index) => (
					<li key={index}>{animal}</li>
				))}
			</ul>
		</>
	);
}

export default UserFavoriteAnimals;
