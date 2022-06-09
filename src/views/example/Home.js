import React from 'react';
import { withRouter } from 'react-router';
import Color from './HOC/Color';
import logo from '../../assets/images/logo.jpg';
import { connect } from 'react-redux';

class Home extends React.Component {
	componentDidMount() {
		// setTimeout(() => {
		// 	// chuyen trang sau 2s
		// 	this.props.history.push('/todo');
		// }, 2000);
	}
	handleDeleteUser = (user) => {
		// console.log('check delete user', user);
		this.props.deleteUserRedux(user);
	};
	handleCreateUser = (user) => {
		// console.log('add user', user);
		this.props.addCreateUser();
	};
	render() {
		console.log('check props redux ', this.props.dataRedux);
		let listUsers = this.props.dataRedux;
		return (
			<>
				<div>Home</div>
				<div>
					<img
						src={logo}
						style={{ width: '160px', height: '250px' }}
					/>
				</div>
				<div>
					{listUsers &&
						listUsers.length > 0 &&
						listUsers.map((item, index) => {
							return (
								<div key={item.id}>
									{index + 1} - {item.name}{' '}
									<span
										onClick={() =>
											this.handleDeleteUser(item)
										}
									>
										x
									</span>
								</div>
							);
						})}
					<button onClick={() => this.handleCreateUser()}>
						add User
					</button>
				</div>
			</>
		);
	}
}
// export default withRouter(Home);
// ket noi rectjs voi redux
const mapStateToProps = (state) => {
	return {
		dataRedux: state.users,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		deleteUserRedux: (userDelete) =>
			dispatch({ type: 'DELETE_USER', payload: userDelete }),
		addCreateUser: () => dispatch({ type: 'ADD_USER' }),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
