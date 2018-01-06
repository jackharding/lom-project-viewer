import axios from 'axios';

const API_URL = 'http://localhost:3004';

export const GET_PROJECTS = 'get_projects';
export const GET_PROJECT = 'get_project';

export function getProjects() {
	const request = axios.get(`${API_URL}/posts`);
	
	return {
		type: GET_PROJECTS,
		payload: request
	}
}

export function getProject(id) {
	const request = axios.get(`${API_URL}/posts/${id}`);

	return {
		type: GET_PROJECT,
		payload: request
	}
}