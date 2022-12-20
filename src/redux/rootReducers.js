import { combineReducers } from 'redux';
import {CLEAR_STATE_ON_SUCESSFULL_LOGOUT} from './action/ActionTypes';
import BaseReducer from './reducers/baseReducer';
// import ChangeTabReducer from '../reducers/homeTabReducer';
// import geoHistoryReducer from '../reducers/geoHistoryReducer';
// import groupReducer from '../reducers/groupReducer';
// import userListReducer from '../reducers/userListReducer';
// import messagesReducer from '../reducers/messageReducer';
// import callReducer from '../reducers/callReducer';
// import cogReducer from '../reducers/cogReducer';
// import changeUserReducer from '../reducers/changeUserReducer';
// import loadingSpinnerReducer from '../reducers/loadingSpinnerReducer';
// import logReducer from '../reducers/logReducer';
// import reconnectingReducer from '../reducers/reconnectingReducer';
// import localRecorderReducer from '../reducers/localRecorderReducer';
// import callBackReqReducer from '../reducers/callBackReqReducer';

/**
 * Combine all the reducers to manage API responses
 */

const appReducer = combineReducers({
	BaseReducer,
	// ChangeTabReducer,
	// geoHistoryReducer,
	// groupReducer,
	// userListReducer,
	// messagesReducer,
	// cogReducer,
	// callReducer,
	// changeUserReducer,
	// loadingSpinnerReducer,
	// logReducer,
	// reconnectingReducer,
	// localRecorderReducer,
	// callBackReqReducer,
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