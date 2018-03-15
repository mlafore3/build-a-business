import axios from 'axios';
// import { URL, LOGIN } from '../Api';

export const SET_TOKEN = 'SET_TOKEN';

export function setToken() {
	const url = 'http://127.0.0.1:8000/auth';
	const request = axios.post(url, {
			username: 'mlaforet',
			password: 'changeme',
		})
	// .then(response => {
	// 		console.log('he', response.data);
	// 	});
	console.log('h', request);
	return {
		type: SET_TOKEN,
		payload: request,
	};
}
