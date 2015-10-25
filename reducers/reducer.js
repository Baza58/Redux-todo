import { combineReducers } from 'redux';
import todos from './todo-reducer';
import undoable, { distinctState } from 'redux-undo';

const rootReducer = combineReducers({
	todos: undoable(todos, { filter: distinctState() })
});

export default rootReducer;