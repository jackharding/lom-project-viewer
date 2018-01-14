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
		// set images for lightbox - use lightbox size if available, else use full
		const lightboxCurrent = images[imgIndex].sizes.lightbox ? images[imgIndex].sizes.lightbox : images[imgIndex].sizes.full;
		const lightboxNext = images[(imgIndex + 1) % images.length].sizes.lightbox ? images[(imgIndex + 1) % images.length].sizes.lightbox : images[(imgIndex + 1) % images.length].sizes.full;
		const lightboxPrev = images[(imgIndex + images.length - 1) % images.length].sizes.lightbox ? images[(imgIndex + images.length - 1) % images.length].sizes.lightbox : images[(imgIndex + images.length - 1) % images.length].sizes.full;

		let loop = 0;
		const renderGallery = images.map(img => {
			const src = img.sizes.tile ? img.sizes.tile : img.sizes.large;
			loop++;

			return(
				<GalleryItem key={img.ID} src={src} onItemClick={this.openLightbox} index={loop - 1} />
			);
		});

		return(
			<div className="gallery row">
				{renderGallery}

				{isOpen && <Lightbox
					mainSrc={lightboxCurrent}
					nextSrc={lightboxNext}
					prevSrc={lightboxPrev}
					onCloseRequest={() => this.setState({ isOpen: false })}
					onMovePrevRequest={() => {
						this.setState({
							imgIndex: (imgIndex + images.length - 1) % images.length,
						})
					}}
					onMoveNextRequest={() => {
						this.setState({
							imgIndex: (imgIndex + 1) % images.length
						})
					}}
				/>}
			</div>
		);
	}
}

export default Gallery;