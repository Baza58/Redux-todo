import React, { Component } from 'react';
import TodoInput from './todoInput';
import TodoList from './TodoList';

class App extends Component {
	render() {
		const { todos, actions } = this.props;
		return (
			<div className="col-sm-6 col-sm-offset-3">
				<h1>Todo App</h1>
				<TodoInput addTodo={actions.addTodo} />
				<hr />
				<TodoList todos={todos} actions={actions} />
			</div>
		);
	}
}

export default App;