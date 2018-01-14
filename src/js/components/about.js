import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Slider from 'react-slick';

import { getAbout } from '../actions';
import { about } from '../reducers';
import Loading from './loading';

class About extends Component {
	componentDidMount() {
		this.props.getAbout();
	}

	renderGallery(img) {		
		return(
			<div className="slider__item" key={img.id}>
				<img src={img.sizes.large} alt={img.alt} />
			</div>
		);
	}

	render() {
		const { data } = this.props.about;

		if(!data) {
			return(
				<div className="about-block container">
					<div className="row">
						<div className="gr-12">
							<Loading />
						</div>
					</div>
				</div>
			);
		}

		const text = data.content.rendered;
		const images = data.acf.slideshow ? data.acf.slideshow : [];
		const settings = {
			slidesToShow: 1,
			infinite: false,
			arrows: false,
			dots: true,
		};		

		return(
			<div className="about-block container">
				<div className="row">
					<div className="about-block__text ptop15-untilTablet pright0-untilTablet pright25 gr-12@untilTablet gr-8 user-content" dangerouslySetInnerHTML={{__html: text}}></div>
					<div className="about-block__slider gr-12@untilTablet gr-4">
						<Slider {...settings}>
							{images.map(this.renderGallery)}
						</Slider>
					</div>
				</div>
			</div>
		);		
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getAbout }, dispatch);
}

function mapStateToProps({ about }) {
	return { about };
}

export default connect(mapStateToProps, { getAbout })(About);