import { combineReducers } from 'redux';
import ProjectsReducer from './reducer-projects';
import HomeReducer from './reducer-home';

const rootReducer = combineReducers({
	projects: ProjectsReducer,
	about: HomeReducer 
});

export default rootReducer;