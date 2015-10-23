import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducer';

const createStoreWithMiddleware = applyMiddleware(
	thunk
)(createStore);

export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState);
	return store;
};