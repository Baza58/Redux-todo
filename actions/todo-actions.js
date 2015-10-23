import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, COMPLETE_TODO, COMPLETE_ALL, UNDO_ALL } from '../constants/todo-constants';

function addTodo(text) {
	return {
		type: ADD_TODO,
		text
	};
} 

function removeTodo(id) {
	return {
		type: REMOVE_TODO,
		id
	};
}

function updateTodo(todo) {
	return {
		type: UPDATE_TODO,
		todo
	};
}

function completeTodo(id) {
	return {
		type: COMPLETE_TODO,
		id
	};
}

function completeAll() {
	return {
		type: COMPLETE_ALL,
	};
}

function undoAll() {
	return {
		type: UNDO_ALL
	};
}