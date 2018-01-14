import React, { Component } from 'react';

const Footer = (props) => {
	return(
		<footer className="footer ptop30 pbot30 p15-mobile container">
			<div className="row">
				<small>&copy; {new Date().getFullYear()} LOM Builders Ltd.</small>
			</div>
		</footer>
	);
}

export default Footer;