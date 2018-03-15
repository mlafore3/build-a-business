import { combineReducers } from 'redux';
import SetToken from './reducer_setToken';

const rootReducer = combineReducers({
	token: SetToken,
});

export default rootReducer;
