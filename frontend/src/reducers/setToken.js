import { setToken } from '../actions/index';

export default function (state = null, action) {
	switch (action.type) {
		case setToken:
			return action.payload.data;
		default:
			return state;
	}
}