import axios from 'axios';
import _ from 'lodash';

const API_URL = 'http://localhost/LOM/wp-json/wp/v2';

export const GET_PROJECTS = 'get_projects';
export const GET_PROJECT = 'get_project';
export const GET_ABOUT = 'get_about';

export function getProjects(dispatch) {
	const request = axios.get(`${API_URL}/projects?_embed`);
	
	return {
		type: GET_PROJECTS,
		payload: request
	}
}

export function getProject(id) {
	const request = axios.get(`${API_URL}/projects/${id}`);

	return {
		type: GET_PROJECT,
		payload: request
	}
}

export function getAbout() {
	const request = axios.get(`${API_URL}/pages/2`);
	
	return {
		type: GET_ABOUT,
		payload: request
	}
}