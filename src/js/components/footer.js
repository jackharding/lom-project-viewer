import React, { Component } from 'react';

const Footer = (props) => {
	return(
		<footer className="ptop15 pbot15 container">
			<div className="row">
				<small>&copy; {new Date().getFullYear()} LOM Builders Ltd.</small>
			</div>
		</footer>
	);
}

export default Footer;