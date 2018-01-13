import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { getProjects } from '../actions';
import { projects } from '../reducers';
import ProjectTile from './project-tile';

class ProjectList extends Component {
	componentDidMount() {
		this.props.getProjects();
	}

	renderProjects() {
		return _.map(this.props.projects, (item) => {
			return(
				<ProjectTile key={item.id} content={item} />
			);
		});
	}

	render() {
		return(
			<div className="tiles">
				<div className="container">
					<div className="row">
						{this.renderProjects()}
					</div>
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getProjects }, dispatch);
}

function mapStateToProps({ projects }) {
	return { projects };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);