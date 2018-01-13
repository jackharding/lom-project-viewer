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
		if(!project) {
			return(
				<div>Loading...</div>
			);
		}

		const { title, content } = project;
		const { gallery } = project.acf;

	    return (
	    	<div class="project">
		        <h1>{title.rendered}</h1>
		        <Tabs disableInlineStyles className="tabs">
		        	<div className="tabs__nav">
			        	<TabLink to="description">Description</TabLink>
			        	<TabLink to="gallery">Gallery</TabLink>
		        	</div>
					
					<div className="tabs__content">
			        	<TabContent for="description">
			        		<div dangerouslySetInnerHTML={{__html: content.rendered}}></div>		        		
			        	</TabContent>
			        	<TabContent for="gallery">
			        		<Gallery images={gallery}></Gallery>
			        	</TabContent>
					</div>
		        </Tabs>		        
	    	</div>
	    );
	}
};

function mapStateToProps({ projects }, ownProps) {
	return { project: projects[ownProps.match.params.id], projects };
}

export default connect(mapStateToProps, { getProject })(ProjectFull);