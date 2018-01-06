import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

import GalleryItem from './gallery-item.js';

class Gallery extends Component {
	constructor(props) {
		super(props);

		this.state = {
			imgIndex: 0,
			isOpen: false
		}

		this.openLightbox = this.openLightbox.bind(this);
	}

	openLightbox(index) {
		this.setState({
			imgIndex: index,
			isOpen: true
		});
	}

	render() {
		const { images } = this.props;
		const { isOpen, imgIndex } = this.state;

		let loop = 0;
		const renderGallery = images.map(img => {
			loop++;
			return(
				<GalleryItem key={loop} src={img} onItemClick={this.openLightbox} index={loop - 1} />
			);
		})

		return(
			<div>				
				{renderGallery}

				{isOpen && <Lightbox
					mainSrc={images[imgIndex]}
					nextSrc={images[(imgIndex + 1) % images.length]}
					prevSrc={images[(imgIndex + images.length - 1) % images.length]}
					onCloseRequest={() => this.setState({ isOpen: false })}
					onMovePrevRequest={() => {
						this.setState({
							imgIndex: (imgIndex + images.length - 1) % images.length,
						})
					}}
					onMoveNextRequest={() => {
						this.setState({
							imgIndex: (imgIndex + images.length - 1) % images.length,
						})
					}}
				/>}
			</div>
		);
	}
}

export default Gallery;