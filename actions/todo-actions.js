import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, COMPLETE_TODO, COMPLETE_ALL, UNDO_TODO, UNDO_ALL } from '../constants/todo-constants';

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

export function updateTodo(todo) {
	return {
		type: UPDATE_TODO,
		todo
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
export function undoTodo(id) {
	return {
		type: UNDO_TODO,
	};
}

export function undoAll() {
	return {
		type: UNDO_ALL
	};
}