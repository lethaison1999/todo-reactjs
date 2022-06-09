/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './Nav.scss';
import { Link, NavLink } from 'react-router-dom';
class Nav extends React.Component {
	render() {
		return (
			//dung the link de chuyen huong trang khong bi load lai
			// dung the navlink de biet url trang hien tai
			<div className="topnav">
				{/* <Link to="/">Home</Link>
				<Link to="/todo">Todo</Link>
				
				<Link to="/about">About</Link> */}

				<NavLink to="/" activeClassName="active" exact={true}>
					Home
				</NavLink>
				<NavLink to="/todo" activeClassName="active">
					Todo
				</NavLink>
				<NavLink to="/about" activeClassName="active">
					About
				</NavLink>
				<NavLink to="/user" activeClassName="active">
					Users
				</NavLink>
			</div>
		);
	}
}
export default Nav;
