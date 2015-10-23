import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, COMPLETE_ALL, UNDO_ALL, UPDATE_TODO } from '../constants/todo-constants';

const initialState = [
	{
		id: 0,
		text: 'Use Redux!',
		completed: false
	}
];

function todos(state = initialState, action) {
	switch(action.type) {
		case ADD_TODO:
			return [
			{
				id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
				text: action.text,
				completed: false
			}, ...state
			];
		case REMOVE_TODO:
			return state.filter(todo => todo.id !== action.id);
		case UPDATE_TODO:
			return;
		case COMPLETE_TODO:
			return state.map(todo => 
				todo.id === action.id ? 
					Object.assign({}, todo, { completed: !todo.completed }) :
					todo
			);
		case COMPLETE_ALL:
			return;
		case UNDO_ALL:
			return;
		default:
			return state;
	};
}

export default todos;