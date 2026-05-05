import React from "react";

class Child extends React.Component {
	componentWillUnmount() {
		alert("The component named Header is about to be unmounted.");
	}

	render() {
		return <h2>Hello World!</h2>;
	}
}

class Color extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			favoriteColor: "red",
			show: true,
		};
	}

	componentDidMount() {
		alert("useEffect reached");
		// Timer to change color to yellow
		setTimeout(() => {
			this.setState({ favoriteColor: "yellow" });
		}, 2000);
	}

	shouldComponentUpdate() {
		return true;
	}

	getSnapshotBeforeUpdate() {
		console.log("in getSnapshotBeforeUpdate");
		return null;
	}

	componentDidUpdate() {
		console.log("after_update");
	}

	changeColor = () => {
		this.setState({ favoriteColor: "blue" });
	};

	deleteHeader = () => {
		this.setState({ show: false });
	};

	render() {
		return (
			<>
				{this.state.show && <Child />}
				<h1>
					My Favorite Color is <i>{this.state.favoriteColor}</i>
				</h1>
				<button onClick={this.changeColor}>Change favorite color</button>
				<button onClick={this.deleteHeader}>Delete Header</button>
			</>
		);
	}
}

export default Color;
