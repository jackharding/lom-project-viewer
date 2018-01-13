import React from 'react';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';

import ProjectList from '../../components/project-list';
import About from '../../components/about';

const Home = (props) => {
    return (
    	<Tabs disableInlineStyles className="tabs">
    		<div className="tabs__nav">
		    	<TabLink to="about">About</TabLink>
		    	<TabLink to="projects">Projects</TabLink>
    		</div>
			
			<div className="tabs__content">
		    	<TabContent for="about">
		    		<About />
		    	</TabContent>
		    	<TabContent for="projects">
	        		<ProjectList />
		    	</TabContent>
			</div>
    	</Tabs>
    );
};

export default Home;