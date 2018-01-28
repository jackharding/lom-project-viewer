import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	if(window.location.pathname.match(/\/projects\/\d+/)) {
		return(
			<div className="container">
				<div className="row">
					<nav className="nav nav--back">
						<NavLink to={`/projects`} exact><i className="fa fa-long-arrow-left" aria-hidden="true"></i>Projects</NavLink>
					</nav>
				</div>
			</div>
		);
	} else {		
		return(
			<div className="container">
				<div className="row">
					<nav className="nav">
						<NavLink to={`/`} activeClassName="active" exact>About</NavLink>
						<NavLink to={`/projects`} activeClassName="active">Projects</NavLink>
					</nav>
				</div>
			</div>
		);
	}
}

export default Nav;