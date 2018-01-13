import React, { Component } from 'react';

const Header = (props) => {
	return(
		<header className="header">
			<div className="header__logo">
				{props.logo && 
					<img src={props.logo} alt="LOM Builders logo" />
				}
			</div>
		</header>
	);
}

export default Header;