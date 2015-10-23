import React, { Component } from 'react';
import TodoInput from './todoInput';
import TodoList from './TodoList';

class App extends Component {
	render() {
		const { todos, actions } = this.props;
		return (
			<div>
				<TodoInput addTodo={actions.addTodo} />
				<TodoList todos={todos} actions={actions} />
			</div>
		);
	}
}

export default App;