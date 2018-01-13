import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ProjectTile = (props) => {
	const { content } = props;
	const title = content.title.rendered;

	let img = '',
		tile = '';
		
	if(content.featured_media) {
		img = content._embedded['wp:featuredmedia'][0].media_details.sizes;
		if(typeof img === 'object') {
			tile = img.tile ? img.tile.source_url : img.full.source_url;
		}
	}

	return(	
		<div className="tile gr-6 gr-4@tablet" style={{backgroundImage: `url(${tile})`}}>
			<Link to={`/projects/${content.id}`}>				
				<div className="tile__content">
					<h3 className="tile__title">{title}</h3>
				</div>
			</Link>
		</div>
	);
}

export default ProjectTile;