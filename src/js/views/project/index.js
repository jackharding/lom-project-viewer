import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';

import { getProject } from '../../actions';
import Gallery from '../../components/gallery';
import Loading from '../../components/loading';

class ProjectFull extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getProject(id);
	}

	render() {
		const { project } = this.props;
		if(!project) {
			return(
				<Loading />
			);
		}

		const { title, content } = project;
		const { gallery } = project.acf;
		let galleryBtn;
		if(gallery) {
			galleryBtn = <TabLink to="gallery"><i className="fa fa-th" aria-hidden="true"></i><span className="sr-only">Gallery</span></TabLink>;
		} else {
			galleryBtn = <div className="tab-link tab-link-disabled"><i className="fa fa-th" aria-hidden="true"></i><span className="sr-only">No images available</span></div>;
		}

	    return (
	    	<div className="page page--project container">
	    		<div className="row">
			        <Tabs disableInlineStyles className="tabs gr-12">
			        	<div className="tabs__nav row row-align-right">
				        	<TabLink to="description"><i className="fa fa-align-left" aria-hidden="true"></i><span className="sr-only">Description</span></TabLink>
				        	{galleryBtn}
			        	</div>
						
						<div className="tabs__content">
				        	<TabContent for="description">
			        			<h1 className="title title--lg">{title.rendered}</h1>
				        		<div className="user-content" dangerouslySetInnerHTML={{__html: content.rendered}}></div>		        		
				        	</TabContent>
				        	{gallery && 
					        	<TabContent for="gallery">
					        		<Gallery images={gallery}></Gallery>
					        	</TabContent>
				        	}
						</div>
			        </Tabs>		        
	    		</div>
	    	</div>
	    );
	}
};

function mapStateToProps({ projects }, ownProps) {
	return { project: projects[ownProps.match.params.id], projects };
}

export default connect(mapStateToProps, { getProject })(ProjectFull);