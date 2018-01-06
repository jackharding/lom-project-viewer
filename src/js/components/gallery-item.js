import React, { Component } from 'react';

class GalleryItem extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.onItemClick(this.props.index);
	}

	render() {
		return(
			<img src={this.props.src} onClick={this.handleClick} alt="" />
		);
	}
}

export default GalleryItem;