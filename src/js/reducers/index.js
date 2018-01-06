import { combineReducers } from 'redux';
import ProjectsReducer from './reducer-projects';

const rootReducer = combineReducers({
	projects: ProjectsReducer,
});

export default rootReducer;