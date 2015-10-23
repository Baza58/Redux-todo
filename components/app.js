import React, { Component } from 'react';
import TodoInput from './todoInput';
import TodoList from './TodoList';

class App extends Component {
	render() {
		const { store, addTodo, removeTodo, updateTodo, completeTodo, completeAll, undoAll } = this.props;
		return (
			<div>
				<TodoInput addTodo={addTodo} />
				<TodoList />
			</div>
		);
	}
}

export default App;