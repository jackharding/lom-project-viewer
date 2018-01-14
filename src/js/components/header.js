import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
	return(
		<header className="header">
			<div className="header__logo">
				{props.logo &&
					<Link to={`/`}> 
						<img src={props.logo} alt="LOM Builders logo" />
					</Link>
				}
			</div>
		</header>
	);
}

export default Header;