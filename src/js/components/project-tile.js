import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ProjectTile = (props) => {
	const { content } = props;
	const title = content.title.rendered;

	let img = '',
		tile = '';

	// console.log(content);
		
	if(content.featured_media) {
		// console.log(content);
		if(content._embedded) {			
			img = content._embedded['wp:featuredmedia'][0].media_details.sizes;
			if(typeof img === 'object') {
				tile = img.tile ? img.tile.source_url : img.full.source_url;
			}
		}
	}

	return(	
		<div className="tile gr-4 gr-6@mobile gr-12@xs">
			<Link to={`/projects/${content.id}`}>
				<div style={{backgroundImage: `url(${tile})`}} className="tile__img"></div>				
			</Link>

			<div className="tile__content">
				<h3 className="tile__title">
					<Link to={`/projects/${content.id}`}>{title}</Link>
				</h3>
			</div>
		</div>
	);
}

export default ProjectTile;