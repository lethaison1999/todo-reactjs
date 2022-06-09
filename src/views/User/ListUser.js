import React from 'react';
import axios from 'axios';
import './user.scss';
import { withRouter } from 'react-router-dom';
class ListUser extends React.Component {
	state = {
		listUser: [],
	};

	async componentDidMount() {
		// axios.get('https://reqres.in/api/users?page=2').then((res) => {
		// 	console.log('check res: ', res.data.data);
		// });
		let res = await axios.get('https://reqres.in/api/users?page=2');
		this.setState({
			listUser: res && res.data && res.data.data ? res.data.data : [],
		});
		// console.log('check res: ', res.data.data);
	}
	handleDeitailView = (user) => {
		this.props.history.push(`/user/${user.id}`);
	};
	render() {
		let { listUser } = this.state;
		return (
			<div className="list-user-container">
				<div className="title">Fetch all list users</div>
				<div className="list-user-content">
					{listUser &&
						listUser.length > 0 &&
						listUser.map((item, index) => {
							return (
								<div
									key={item.id}
									className="child"
									value={item.id}
									onClick={() => this.handleDeitailView(item)}
								>
									{index + 1} - {item.first_name}{' '}
									{item.last_name}
								</div>
							);
						})}
				</div>
			</div>
		);
	}
}
export default withRouter(ListUser);
