import React from 'react';

class AddComponent extends React.Component {
	state = {
		title: '',
		description: '',
	};
	handleChangetitle = (event) => {
		this.setState({
			title: event.target.value,
		});
	};
	handleChangedescription = (event) => {
		this.setState({
			description: event.target.value,
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();
		//ngan chan hanh vi submit k refesh lai trang web
		if (!this.state.title || !this.state.description) {
			alert('add title and description ');
			return;
		}
		console.log('check data input', this.state);
		this.props.addNewJob({
			id: Math.floor(Math.random() * 100),
			title: this.state.title,
			description: this.state.description,
		});
		this.setState({
			title: '',
			description: '',
		});
	};

	render() {
		return (
			<>
				<form>
					<label htmlFor="fname">title:</label>
					<br />
					<input
						type="text"
						value={this.state.title}
						onChange={(event) => this.handleChangetitle(event)}
					/>
					<br />
					<label htmlFor="lname">description:</label>
					<br />
					<input
						type="text"
						value={this.state.description}
						onChange={(event) =>
							this.handleChangedescription(event)
						}
					/>
					<br />
					<input
						type="submit"
						onClick={(event) => this.handleSubmit(event)}
					/>
				</form>
			</>
		);
	}
}
export default AddComponent;
