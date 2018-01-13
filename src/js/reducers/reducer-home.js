import { GET_ABOUT } from '../actions';

export default function (state = {}, action) {
	switch(action.type) {
		case GET_ABOUT:
			const { data } = action.payload;
			return { ...state, data };
	}

	return state;
}