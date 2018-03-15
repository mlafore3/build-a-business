import { SET_TOKEN } from '../actions/index';

export default function (state = null, action) {
	switch (action.type) {
		case SET_TOKEN:
			console.log('action', action);
			return action.payload.data;
		default:
			return state;
	}
}