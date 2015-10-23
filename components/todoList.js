import React, { Component } from 'react';
import Todo from './todo';

class TodoList extends Component {
	render = () => {
		const { todos, actions } = this.props;
		let todoNodes = todos.map((todo, i) => {
			return <Todo id={todo.id}
						 text={todo.text}
						 completed={todo.completed}
						 key={i}
						 completeTodo={actions.completeTodo}
						 removeTodo={actions.removeTodo} />
		});
		return (
			<div>
				{todoNodes}
			</div>
		);
	}
}

export default TodoList;