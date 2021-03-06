import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducer';
import createLogger from 'redux-logger';


const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(
	thunk,
	logger
)(createStore);

export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState);
	return store;
};