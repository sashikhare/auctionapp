import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducers';

/**
 * @param {initialState}
 * Configure redux store
 */

// export const saveToLocalStorage = state => {
// 	try {
// 		if (localStorage.getItem('state') !== JSON.stringify(state)) {
// 			const serialisedState = JSON.stringify(state);
// 			localStorage.setItem('state', serialisedState);
// 		}
// 	} catch (e) {
// 		console.log(e);
// 	}
// };

// export const loadFromLocalStorage = () => {
// 	try {
// 		const serialisedState = localStorage.getItem('state');
// 		if (serialisedState === null) return undefined;
// 		return JSON.parse(serialisedState);
// 	} catch (e) {
// 		console.log(e);
// 		return undefined;
// 	}
// };

// const persistedStore = loadFromLocalStorage();

const configureStore = initialState => {
	// console.log('store');
	const middleware = [thunk];
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

};

export default configureStore;
