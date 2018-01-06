import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';

import { getProject } from '../../actions';
import Gallery from '../../components/gallery';

class ProjectFull extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getProject(id);
	}

	render() {
		const { project } = this.props;
		console.log(project);
		if(!project) {
			return(
				<div>Loading...</div>
			);
		}

	    return (
	    	<div>	    		
		        <h1>{project.title}</h1>
		        <Tabs>
		        	<TabLink to="description">Description</TabLink>
		        	<TabLink to="gallery">Gallery</TabLink>

		        	<TabContent for="description">
		        		{project.text}
		        	</TabContent>
		        	<TabContent for="gallery">
		        		<Gallery images={project.images}></Gallery>
		        	</TabContent>
		        </Tabs>		        
	    	</div>
	    );
	}
};

function mapStateToProps({ projects }, ownProps) {
	return { project: projects[ownProps.match.params.id], projects };
}

export default connect(mapStateToProps, { getProject })(ProjectFull);