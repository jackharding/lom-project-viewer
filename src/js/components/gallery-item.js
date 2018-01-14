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
			<div className="gallery__item gr-4 gr-3@tabletUp">
				<div className="gallery__img" style={{ backgroundImage: `url(${this.props.src})` }} onClick={this.handleClick}></div>
			</div>
		);
	}
}

export default GalleryItem;