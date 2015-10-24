import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, COMPLETE_TODO, COMPLETE_ALL } from '../constants/todo-constants';

export function addTodo(text) {
	return {
		type: ADD_TODO,
		text
	};
} 

export function removeTodo(id) {
	return {
		type: REMOVE_TODO,
		id
	};
}

export function updateTodo(id, text) {
	return {
		type: UPDATE_TODO,
		id,
		text
	};
}

export function completeTodo(id) {
	return {
		type: COMPLETE_TODO,
		id
	};
}

export function completeAll() {
	return {
		type: COMPLETE_ALL,
	};
}