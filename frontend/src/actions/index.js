// import * as actionType from './types';

// export const setToken = (data) => {
//   return {
//     type: actionType.SET_TOKEN,
//     data
//   }
// }


//import axios from 'axios';
// import { URL, LOGIN } from '../Api';

export const SET_TOKEN = 'SET_TOKEN';

export function setToken() {
	//const url = URL + LOGIN;
	//const request = axios.post(url);
  return {
    type: SET_TOKEN,
    payload: 'hello',
    // payload: request,
  };
}
