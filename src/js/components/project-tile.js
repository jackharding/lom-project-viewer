import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ProjectTile = (props) => {
	const { content } = props;
	const img = content.image;

	return(	
		<div className="tile" style={{backgroundImage: `url(${img})`}}>
			<Link to={`/projects/${content.id}`}>				
				<div className="tile__content">
					<h3 className="tile__title">{content.title}</h3>
				</div>
			</Link>
		</div>
	);
}

export default ProjectTile;