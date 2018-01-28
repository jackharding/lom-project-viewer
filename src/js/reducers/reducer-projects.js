import _ from 'lodash';
import { GET_PROJECTS, GET_PROJECT } from '../actions';

export default function (state = {}, action) {
	switch(action.type) {
		case GET_PROJECTS:
			return _.mapKeys(action.payload.data, 'id');

		case GET_PROJECT:
			return { ...state, [action.payload.data.id]: action.payload.data };

		default:
			return state;
	}
}