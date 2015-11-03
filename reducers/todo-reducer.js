import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, COMPLETE_ALL, UPDATE_TODO } from '../constants/todo-constants';
import {Map} from 'immutable';

const initialState = Map({
	todos: Map({
			0: Map({
				id: "0",
				text: 'Keep on coding!',
				completed: false
			}),
		})
});

function addTodo(state, action) {
	const id = state.get('todos').reduce((maxId, todo) => Math.max(todo.get('id'), maxId), -1) + 1;
	return state.setIn(['todos', id.toString()], Map({
		id: id.toString(),
		text: action.text,
		completed: false
	}));
}

function removeTodo(state, action) {
	return state.deleteIn(['todos', action.id]);
}

function updateTodo(state, action) {
	return state.setIn(['todos', action.id, 'text'], action.text);
}

function completeTodo(state, action) {
	return state.setIn(['todos', action.id, 'completed'], !state.getIn(['todos', action.id, 'completed']));
}

function completeAll(state) {
	const marked = state.get('todos').every(todo => todo.get('completed') === true);
	const newState = state.get('todos').map(todo => todo.set('completed', !marked));
	return state.set('todos', newState);
}

function todos(state = initialState, action) {
	switch(action.type) {
		case ADD_TODO:
			return addTodo(state, action);
		case REMOVE_TODO:
			return removeTodo(state,action);
		case UPDATE_TODO:
			return updateTodo(state, action);
		case COMPLETE_TODO:
			return completeTodo(state, action);
		case COMPLETE_ALL:
			return completeAll(state);
		default:
			return state;
	};
}

export default todos;