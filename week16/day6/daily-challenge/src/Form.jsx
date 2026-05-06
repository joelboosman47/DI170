function Form({ formData, handleChange }) {
	return (
		<>
			<form className="inputForm">
				<input
					className="text"
					name="firstName"
					placeholder="First Name"
					value={formData.firstName}
					onChange={handleChange}
				></input>
				<br />
				<input
					className="text"
					name="lastName"
					placeholder="Last Name"
					value={formData.lastName}
					onChange={handleChange}
				></input>
				<br />
				<input
					className="text"
					name="age"
					placeholder="Age"
					value={formData.age}
					onChange={handleChange}
				></input>
				<br />
				<br />
				<label>
					<input
						className="radiobutton"
						type="radio"
						name="gender"
						value="male"
						checked={formData.gender === "male"}
						onChange={handleChange}
					/>
					Male
				</label>
				<label>
					<br />
					<input
						className="radiobutton"
						type="radio"
						name="gender"
						value="female"
						checked={formData.gender === "female"}
						onChange={handleChange}
					/>
					Female
				</label>
				<br />
				<label className="destination-header">Select your destination</label>
				<br />
				<select
					className="destination-input"
					name="destination"
					value={formData.destination}
					onChange={handleChange}
				>
					<option value="">-- Please Choose a destination --</option>
					<option value="Thailand">Thailand</option>
					<option value="Japan">Japan</option>
					<option value="Brazil">Brazil</option>
				</select>
				<br />
				<br />
				<label className="restrictions-title">Dietary restrictions:</label>
				<div className="restrictions">
					<input
						type="checkbox"
						name="nutsFree"
						checked={formData.nutsFree}
						onChange={handleChange}
					/>
					<span>Nuts free</span>
					<br />
					<input
						type="checkbox"
						name="lactoseFree"
						checked={formData.lactoseFree}
						onChange={handleChange}
					/>
					<span>Lactose free</span>
					<br />
					<input
						type="checkbox"
						name="isVegan"
						checked={formData.isVegan}
						onChange={handleChange}
					/>
					<span>Vegan</span>{" "}
				</div>
				<button className="submit">Submit</button>
			</form>
		</>
	);
}

export default Form;
