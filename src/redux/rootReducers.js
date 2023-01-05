import { combineReducers } from 'redux';
import {CLEAR_STATE_ON_SUCESSFULL_LOGOUT} from './action/ActionTypes';
import BaseReducer from './reducers/baseReducer';
import PlayerReducer from './reducers/playerReducer';

/**
 * Combine all the reducers to manage API responses
 */

const appReducer = combineReducers({
	// BaseReducer,
	PlayerReducer
});

const rootReducer = (state, action) => {
	if (action.type === CLEAR_STATE_ON_SUCESSFULL_LOGOUT) {
		state = undefined;
	}
	// if (action.type === ActionType.STORE_UPDATE) {
	
	// 	state=undefined
	// 	state = action.payload
		
	// }
	

	return appReducer(state, action);
};
export default rootReducer;