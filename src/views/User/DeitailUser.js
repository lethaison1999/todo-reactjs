import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
class DeitailUser extends React.Component {
	state = {
		user: {},
	};
	async componentDidMount() {
		if (this.props.match && this.props.match.params) {
			let id = this.props.match.params.id;
			let res = await axios.get(`https://reqres.in/api/users/${id}`);
			this.setState({
				user: res && res.data && res.data.data ? res.data.data : {},
			});
			console.log('check res :', res);
		}
	}
	handleBack = () => {
		this.props.history.push(`/user`); // chuyen trang
	};

	render() {
		let { user } = this.state;
		let isEmptyObj = Object.keys(user).length === 0;
		return (
			<>
				<div>Deitail User id : {this.props.match.params.id}</div>
				{isEmptyObj === false && (
					<>
						<div>
							{' '}
							User name:{user.first_name} - {user.last_name}
						</div>
						<div> User email:{user.email}</div>
						<div>
							<img src={user.avatar} />
						</div>
						<div>
							<button
								style={{ cursor: 'pointer' }}
								type="button"
								onClick={() => this.handleBack()}
							>
								Back
							</button>
						</div>
					</>
				)}
			</>
		);
	}
}
export default withRouter(DeitailUser);
