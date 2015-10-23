import React, { Component } from 'react';

class App extends Component {
	render() {
		const { store, addTodo, removeTodo, updateTodo, completeTodo, completeAll, undoAll } = this.props;
		return (
			<TodoInput />
			<TodoList />
		);
	}
}

export default App;