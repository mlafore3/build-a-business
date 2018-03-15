//import { SET_TOKEN } from '../actions/index';

export default function (state = null, action) {
	switch (action.type) {
		case 'SET_TOKEN':
			return action.payload;
			//return action.payload.data
		default:
			return state;
	}
}